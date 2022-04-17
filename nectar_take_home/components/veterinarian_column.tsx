import { Card, Col, Row } from 'react-bootstrap';

export default function Dashboard({ veterinarian, timeslots, vet_sched }) {
  return (
    <>
      <Row>
        <Card bg={veterinarian.active ? 'light' : 'dark'}>
          <Card.Header>
            {veterinarian.first_name + ' ' + veterinarian.last_name}
          </Card.Header>
        </Card>
      </Row>
      {timeslots.map((timeslot) => {
        return (
          <Row key={timeslot}>
            {vet_sched.map((appointment) => {
              const date = new Date(appointment.start_time);
              if (date === timeslot) {
                return (
                  <Col key={appointment.id}>
                    <Card bg={'light'}>
                      <Card.Header>
                        {appointment.client_name +
                          ' ' +
                          appointment.client_last_name}
                      </Card.Header>
                    </Card>
                  </Col>
                );
              } else {
                <Card bg={'light'}>
                  <Card.Header>&nbsp;</Card.Header>
                </Card>;
              }
            })}
          </Row>
        );
      })}
    </>
  );
}
