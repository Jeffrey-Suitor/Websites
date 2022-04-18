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
}

const BookAppointmentModalContext =
  createContext<BookAppointmentModalProviderInterface>({
    showBookAppointmentModal: false,
    setShowBookAppointmentModal: () => {},
    bookAppointmentModalDate: new Date(),
    setBookAppointmentModalDate: () => {},
  });

export const useBookAppointmentModal = () =>
  useContext(BookAppointmentModalContext);

export const BookAppointmentModalProvider = ({ children }) => {
  const [showBookAppointmentModal, setShowBookAppointmentModal] =
    useState(false);

  const [bookAppointmentModalDate, setBookAppointmentModalDate] = useState(
    new Date()
  );

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
      }}
    >
      {children}
    </BookAppointmentModalContext.Provider>
  );
};
