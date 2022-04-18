export default interface AppointmentInterface {
  appointment_type: string;
  checkin_time?: string;
  client_email: string;
  client_first_name: string;
  client_last_name: string;
  client_phone_number: string;
  clinic_id: string;
  id: string;
  patient_breed: string;
  patient_color: string;
  patient_dob: string;
  patient_name: string;
  staff_notes: string;
  start_time: string;
  status: string;
  tech_id: string;
  vet_id: string;
}
