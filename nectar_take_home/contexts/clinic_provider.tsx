import {
  createContext,
  useState,
  useContext,
  SetStateAction,
  Dispatch,
} from 'react';
import type ClinicInterface from '../types/clinicInterface';

const defaultClinic: ClinicInterface = {
  name: 'default',
  id: 'default',
  email: 'default',
  phone: 'default',
  status: 'pending',
  employees: [],
};

interface clinicProviderInterface {
  currentClinic: ClinicInterface;
  setCurrentClinic: Dispatch<SetStateAction<ClinicInterface>>;
}

const ClinicContext = createContext<clinicProviderInterface>({
  currentClinic: defaultClinic,
  setCurrentClinic: () => {},
});

export const useClinic = () => useContext(ClinicContext);

export const ClinicProvider = ({ children }) => {
  const [currentClinic, setCurrentClinic] =
    useState<ClinicInterface>(defaultClinic);

  return (
    <ClinicContext.Provider value={{ currentClinic, setCurrentClinic }}>
      {children}
    </ClinicContext.Provider>
  );
};
