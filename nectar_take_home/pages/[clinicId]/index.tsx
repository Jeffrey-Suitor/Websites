import type Clinic from '../../types/clinicInterface';
import { useClinic } from '../../contexts/clinic_provider';
import NectarHeader from '../../components/nectar_header';
import EmployeeInterface from '../../types/employeeInterface';
import { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import VeterinarianColumn from '../../components/veterinarian_column';

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
    // appointment.start_time = new Date(appointment.start_time);
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
  const [timeslots, setTimeslots] = useState([]);
  const { currentClinic } = useClinic();
  console.log(vet_sched);

  const veterinarians = currentClinic.employees.filter(
    (employee: EmployeeInterface) => {
      return employee.clinic_role === 'veterinarian';
    }
  );

  useEffect(() => {
    const tempTimeslots = [];
    for (let i = 0; i < 33; i++) {
      // 32 timeslots of 15 minutes each
      const time = new Date();
      time.setHours(9);
      time.setMinutes(i * 15);
      tempTimeslots.push(time);
    }
    setTimeslots(tempTimeslots);
  }, []);

  return (
    <>
      <NectarHeader />
      <Row className="mt-5">
        <Col>
          <Row>
            <Card bg={'light'}>
              <Card.Header>Timeslots</Card.Header>
            </Card>
          </Row>{' '}
          {timeslots.map((timeslot) => {
            return (
              <Row>
                <Card bg={'light'}>
                  <Card.Header>
                    {timeslot.toLocaleTimeString('en-US', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </Card.Header>
                </Card>
              </Row>
            );
          })}
        </Col>
        {veterinarians.map((veterinarian) => {
          return (
            <Col>
              <VeterinarianColumn
                veterinarian={veterinarian}
                timeslots={timeslots}
                vet_sched={vet_sched[veterinarian.id]}
              />
            </Col>
          );
        })}
      </Row>
    </>
  );
}
