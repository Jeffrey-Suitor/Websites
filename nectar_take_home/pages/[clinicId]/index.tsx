import type Clinic from '../../types/clinic_interface';
import { useClinic } from '../../contexts/clinic_provider';
import NectarHeader from '../../components/nectar_header';
import EmployeeInterface from '../../types/employee_interface';
import { Button, Card, Col, Row } from 'react-bootstrap';
import VeterinarianColumn from '../../components/veterinarian_column';
import { useDate } from '../../contexts/date_provider';
import { useBookAppointmentModal } from '../../contexts/book_appointment_modal_provider';
import BookAppointmentModal from '../../components/book_appointment_modal';

export async function getStaticPaths() {
  const res = await fetch(
    'https://61a576964c822c001704220b.mockapi.io/api/v1/clinics'
  );
  const data = await res.json();

  const paths = data.map((clinic: Clinic) => {
    return { params: { clinicId: clinic.id } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://61a576964c822c001704220b.mockapi.io/api/v1/clinics/` +
      `${params.clinicId}` +
      `/appointment`
  );
  const appointments = await res.json();

  const vet_sched = {};
  appointments.forEach((appointment) => {
    if (vet_sched[appointment.vet_id] === undefined) {
      vet_sched[appointment.vet_id] = [appointment];
    } else {
      vet_sched[appointment.vet_id].push(appointment);
    }
  });

  return {
    props: {
      vet_sched,
    },
    revalidate: 10, // In seconds
  };
}

export default function Dashboard({ vet_sched }) {
  const { currentClinic } = useClinic();
  const { timeslots } = useDate();

  const {
    showBookAppointmentModal,
    setShowBookAppointmentModal,
    setBookAppointmentModalDate,
    setBookAppointmentModalVetID,
  } = useBookAppointmentModal();

  const veterinarians = currentClinic.employees.filter(
    (employee: EmployeeInterface) => {
      return employee.clinic_role === 'veterinarian';
    }
  );

  return (
    <>
      {showBookAppointmentModal && <BookAppointmentModal />}
      <NectarHeader />
      <Row className="mt-5">
        <Row className="mb-2">
          <Col xs={2}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Timeslots</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          {veterinarians.map((veterinarian) => {
            return (
              <Col>
                <Card
                  bg={veterinarian.active ? '' : 'warning'}
                  className="h-100"
                >
                  <Card.Body>
                    <Card.Title>
                      {veterinarian.first_name + ' ' + veterinarian.last_name}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
        {timeslots.map((timeslot, idx) => {
          return (
            <Row className="mb-2">
              <Col xs={2}>
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>
                      {' '}
                      {timeslot.toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              {veterinarians.map((veterinarian) => {
                return (
                  <Col>
                    <VeterinarianColumn
                      vet_sched={vet_sched[veterinarian.id]}
                      timeslotStart={timeslots[idx]}
                      timeslotEnd={timeslots[idx + 1]}
                    />
                  </Col>
                );
              })}
            </Row>
          );
        })}
      </Row>
      <Button
        className="p-3 m-5 fixed-bottom w-25 float-right"
        variant="primary"
        onClick={() => {
          setBookAppointmentModalDate(new Date());
          setBookAppointmentModalVetID('');
          setShowBookAppointmentModal(true);
        }}
        style={{ left: 'unset' }}
      >
        Add Appointment
      </Button>{' '}
    </>
  );
}
