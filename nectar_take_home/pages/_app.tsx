import '../styles/globals.scss';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'react-datepicker/dist/react-datepicker.css';
import { ClinicProvider } from '../contexts/clinic_provider';
import { DateProvider } from '../contexts/date_provider';
import { BookAppointmentModalProvider } from '../contexts/book_appointment_modal_provider';

function NectarTakeHome({ Component, pageProps }) {
  return (
    <ClinicProvider>
      <DateProvider>
        <BookAppointmentModalProvider>
          <Component {...pageProps} />
        </BookAppointmentModalProvider>
      </DateProvider>
    </ClinicProvider>
  );
}

export default NectarTakeHome;
