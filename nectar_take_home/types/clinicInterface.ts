import EmployeeInterface from './employeeInterface';

export default interface ClinicInterface {
  name: string;
  id: string;
  email: string;
  phone: string;
  status: "open" | "closed" | "pending";
  employees: EmployeeInterface[]
}