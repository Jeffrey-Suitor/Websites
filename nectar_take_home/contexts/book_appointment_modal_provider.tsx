import {
  createContext,
  useState,
  useContext,
  SetStateAction,
  Dispatch,
  useEffect,
} from 'react';

interface BookAppointmentModalProviderInterface {
  showBookAppointmentModal: boolean;
  setShowBookAppointmentModal: Dispatch<SetStateAction<boolean>>;
  bookAppointmentModalDate: Date;
  setBookAppointmentModalDate: Dispatch<SetStateAction<Date>>;
  bookAppointmentModalVetID: string;
  setBookAppointmentModalVetID: Dispatch<SetStateAction<string>>;
}

const BookAppointmentModalContext =
  createContext<BookAppointmentModalProviderInterface>({
    showBookAppointmentModal: false,
    setShowBookAppointmentModal: () => {},
    bookAppointmentModalDate: new Date(),
    setBookAppointmentModalDate: () => {},
    bookAppointmentModalVetID: '',
    setBookAppointmentModalVetID: () => {},
  });

export const useBookAppointmentModal = () =>
  useContext(BookAppointmentModalContext);

export const BookAppointmentModalProvider = ({ children }) => {
  const [showBookAppointmentModal, setShowBookAppointmentModal] =
    useState(false);

  const [bookAppointmentModalDate, setBookAppointmentModalDate] = useState(
    new Date()
  );

  const [bookAppointmentModalVetID, setBookAppointmentModalVetID] =
    useState('');

  useEffect(() => {
    if (bookAppointmentModalDate.getMinutes() % 15 === 0) {
      return;
    }
    const minutes = Math.floor(bookAppointmentModalDate.getMinutes() / 15) * 15;
    const time = new Date(bookAppointmentModalDate.getTime());
    time.setMinutes(minutes);
    setBookAppointmentModalDate(time);
  }, [bookAppointmentModalDate]);

  return (
    <BookAppointmentModalContext.Provider
      value={{
        showBookAppointmentModal,
        setShowBookAppointmentModal,
        bookAppointmentModalDate,
        setBookAppointmentModalDate,
        bookAppointmentModalVetID,
        setBookAppointmentModalVetID,
      }}
    >
      {children}
    </BookAppointmentModalContext.Provider>
  );
};
