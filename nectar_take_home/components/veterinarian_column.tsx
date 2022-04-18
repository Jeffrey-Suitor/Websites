import { Accordion, Card, Col, Row, Button } from 'react-bootstrap';
import type AppointmentInterface from '../types/appointment_interface';
import { useBookAppointmentModal } from '../contexts/book_appointment_modal_provider';

interface DashboardProps {
  vet_sched: AppointmentInterface[];
  timeslotStart: Date;
  timeslotEnd: Date;
}

export default function Dashboard({
  vet_sched,
  timeslotStart,
  timeslotEnd,
}: DashboardProps) {
  const { setShowBookAppointmentModal, setBookAppointmentModalDate } =
    useBookAppointmentModal();

  const timeslotAppointments = vet_sched
    .map((appointment: AppointmentInterface) => {
      const appointmentStart = new Date(appointment.start_time);

      if (
        !timeslotStart === undefined ||
        timeslotEnd === undefined ||
        timeslotStart.getTime() > appointmentStart.getTime() ||
        timeslotEnd.getTime() < appointmentStart.getTime()
      ) {
        return;
      }

      return (
        <Col key={appointment.id} onClick={(e) => e.stopPropagation()}>
          <Accordion.Item eventKey={appointment.id} className="my-2">
            <Card>
              <Card.Header style={{ paddingLeft: '2.25rem' }}>
                Phone: {appointment.client_phone_number}
              </Card.Header>
              <Card.Body>
                <Card.Text
                  className="text-capitalize"
                  style={{ paddingLeft: '1.25rem' }}
                >
                  Appointment Type:{' '}
                  {appointment.appointment_type.replace('_', ' ')}
                </Card.Text>
                {appointment.staff_notes && (
                  <Card.Text
                    className="text-capitalize"
                    style={{ paddingLeft: '1.25rem' }}
                  >
                    Notes: {appointment.staff_notes}
                  </Card.Text>
                )}
                <Accordion flush>
                  <Accordion.Header>
                    <Card.Title>
                      {' '}
                      {appointment.client_first_name +
                        ' ' +
                        appointment.client_last_name +
                        ' (' +
                        appointment.patient_name +
                        ')'}{' '}
                    </Card.Title>
                    <Card.Subtitle></Card.Subtitle>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Card.Text>
                      Patient Name: {appointment.patient_name}
                    </Card.Text>
                    <Card.Text>Breed: {appointment.patient_breed}</Card.Text>
                    <Card.Text>Color: {appointment.patient_color}</Card.Text>
                    <Card.Text>
                      DOB: {new Date(appointment.patient_dob).toDateString()}
                    </Card.Text>
                    <Card.Text>Email: {appointment.client_email}</Card.Text>
                  </Accordion.Body>
                </Accordion>
              </Card.Body>
            </Card>
          </Accordion.Item>
        </Col>
      );
    })
    .filter((appointment) => appointment !== undefined);

  return (
    <>
      <Row key={timeslotStart + '-' + timeslotEnd} className="h-100">
        {timeslotAppointments.length > 0 ? (
          timeslotAppointments
        ) : (
          <Col>
            <Card
              className="align-middle h-100"
              style={{
                boxSizing: 'border-box',
                borderStyle: 'dotted',
              }}
            >
              <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                <Button
                  variant="outline-primary"
                  onClick={() => {
                    setBookAppointmentModalDate(timeslotStart);
                    setShowBookAppointmentModal(true);
                  }}
                >
                  Add Appointment (
                  {timeslotStart.toLocaleTimeString(
                    typeof window !== 'undefined'
                      ? navigator.language
                      : 'en-US',
                    {
                      hour: '2-digit',
                      minute: '2-digit',
                    }
                  )}
                  )
                </Button>
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
    </>
  );
}
