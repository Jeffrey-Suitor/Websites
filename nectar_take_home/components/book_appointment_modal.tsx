import { useEffect, useState } from 'react';
import { Button, Form, Modal, Row } from 'react-bootstrap';
import { useBookAppointmentModal } from '../contexts/book_appointment_modal_provider';
import { useClinic } from '../contexts/clinic_provider';
import { useRouter } from 'next/router';

export default function BookAppointmentModal() {
  const { currentClinic } = useClinic();
  const router = useRouter();

  const veterinarians = currentClinic.employees.filter(
    (employee) => employee.clinic_role === 'veterinarian'
  );

  const {
    showBookAppointmentModal,
    setShowBookAppointmentModal,
    bookAppointmentModalDate,
  } = useBookAppointmentModal();

  const appointment_types = [
    'wellness',
    'sick',
    'recheck',
    'new_patient',
    'tech',
  ];

  const veterinary_technicians = currentClinic.employees.filter(
    (employee) => employee.clinic_role === 'technician'
  );

  const appointmentStatus = ['booked', 'checked_in', 'no_show'];

  const [formState, setFormState] = useState({
    start_time: bookAppointmentModalDate.toLocaleString('sv').replace(' ', 'T'),
    client_first_name: '',
    client_last_name: '',
    client_phone_number: '',
    client_email: '',
    patient_name: '',
    patient_breed: '',
    patient_dob: new Date().toLocaleString('sv').replace(' ', 'T'),
    patient_color: '',
    vet_id: veterinarians[0].id,
    tech_id: veterinary_technicians[0].id,
    staff_notes: '',
    appointment_type: appointment_types[0],
    status: appointmentStatus[0],
    checkin_time: bookAppointmentModalDate
      .toLocaleString('sv')
      .replace(' ', 'T'),
  });

  useEffect(() => {
    setFormState({
      ...formState,
      start_time: bookAppointmentModalDate
        .toLocaleString('sv')
        .replace(' ', 'T'),
      checkin_time: bookAppointmentModalDate
        .toLocaleString('sv')
        .replace(' ', 'T'),
    });
  }, [bookAppointmentModalDate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      return;
    }
    fetch(
      `https://61a576964c822c001704220b.mockapi.io/api/v1/clinics` +
        `/${currentClinic.id}` +
        `/appointment`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      }
    );
    router.replace(router.asPath);
    setShowBookAppointmentModal(false);
  };

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={showBookAppointmentModal}
      onHide={() => setShowBookAppointmentModal(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Book Appointment
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formStartTime">
            <Form.Label>Appointment Time:</Form.Label>
            <Form.Control
              required
              type="datetime-local"
              placeholder="Select an appointment time"
              value={formState.start_time}
              onChange={(e) => {
                const date = new Date(e.target.value);
                const minutes = Math.floor(date.getMinutes() / 15) * 15;
                const time = new Date(date.getTime());
                time.setMinutes(minutes);
                setFormState({
                  ...formState,
                  start_time: time.toLocaleString('sv').replace(' ', 'T'),
                });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCheckIn">
            <Form.Label>Check in Time:</Form.Label>
            <Form.Control
              required
              type="datetime-local"
              placeholder="Select a check in time"
              value={formState.checkin_time}
              onChange={(e) => {
                const date = new Date(e.target.value);
                const minutes = Math.floor(date.getMinutes() / 15) * 15;
                const time = new Date(date.getTime());
                time.setMinutes(minutes);
                setFormState({
                  ...formState,
                  checkin_time: time.toLocaleString('sv').replace(' ', 'T'),
                });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formVeterinarian">
            <Form.Label>Veterinarian:</Form.Label>
            {veterinarians.map((veterinarian) => {
              return (
                <Form.Check
                  key={veterinarian.id}
                  type="radio"
                  label={veterinarian.first_name + ' ' + veterinarian.last_name}
                  id={veterinarian.id}
                  onChange={(e) => {
                    setFormState({
                      ...formState,
                      vet_id: e.target.id,
                    });
                  }}
                />
              );
            })}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formVeterinaryTechnician">
            <Form.Label>Veterinary Technician:</Form.Label>
            {veterinary_technicians.map((vet_tech) => {
              return (
                <Form.Check
                  key={vet_tech.id}
                  type="radio"
                  label={vet_tech.first_name + ' ' + vet_tech.last_name}
                  id={vet_tech.id}
                  onChange={(e) => {
                    setFormState({
                      ...formState,
                      tech_id: e.target.id,
                    });
                  }}
                />
              );
            })}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formAppointmentType">
            <Form.Label>Appointment Type: </Form.Label>
            {appointment_types.map((appointment_type) => {
              return (
                <Form.Check
                  key={appointment_type}
                  className="text-capitalize"
                  type="radio"
                  label={appointment_type.replace('_', ' ')}
                  id={appointment_type}
                  onChange={(e) => {
                    setFormState({
                      ...formState,
                      appointment_type: e.target.value,
                    });
                  }}
                />
              );
            })}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formStatus">
            <Form.Label>Status: </Form.Label>
            {appointmentStatus.map((status) => {
              return (
                <Form.Check
                  key={status}
                  className="text-capitalize"
                  type="radio"
                  label={status.replace('_', ' ')}
                  id={status}
                  onChange={(e) => {
                    setFormState({
                      ...formState,
                      status: e.target.id,
                    });
                  }}
                />
              );
            })}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formFirstName">
            <Form.Label>Client First Name:</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First Name"
              onChange={(e) => {
                setFormState({
                  ...formState,
                  client_first_name: e.target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formLastName">
            <Form.Label>Client Last Name:</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last Name"
              onChange={(e) => {
                setFormState({
                  ...formState,
                  client_last_name: e.target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPhoneNumber">
            <Form.Label>Client Phone Number:</Form.Label>
            <Form.Control
              required
              type="tel"
              placeholder="Phone Number"
              onChange={(e) => {
                setFormState({
                  ...formState,
                  client_phone_number: e.target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Client Email:</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setFormState({ ...formState, client_email: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formpatient_name">
            <Form.Label>Patient Name:</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Patient Name"
              onChange={(e) => {
                setFormState({ ...formState, patient_name: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formpatient_breed">
            <Form.Label>Patient Breed:</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Patient Breed"
              onChange={(e) => {
                setFormState({ ...formState, patient_breed: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formpatient_dob">
            <Form.Label>Patient DOB:</Form.Label>
            <Form.Control
              required
              type="date"
              placeholder="Patient DOB"
              value={formState.patient_dob.split('T')[0]}
              onChange={(e) => {
                setFormState({
                  ...formState,
                  patient_dob: new Date(e.target.value)
                    .toLocaleString('sv')
                    .replace(' ', 'T'),
                });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formpatient_color">
            <Form.Label>Patient Color:</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Patient Color"
              onChange={(e) => {
                setFormState({
                  ...formState,
                  patient_color: e.target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-5" controlId="formpatient_color">
            <Form.Label>Notes:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Additional notes"
              onChange={(e) => {
                setFormState({
                  ...formState,
                  staff_notes: e.target.value,
                });
              }}
            />
          </Form.Group>
          <Row className="d-flex flex-column justify-content-center align-items-center">
            <Button className="w-75 p-3" variant="primary" type="submit">
              Submit
            </Button>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="danger"
          onClick={() => setShowBookAppointmentModal(false)}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
