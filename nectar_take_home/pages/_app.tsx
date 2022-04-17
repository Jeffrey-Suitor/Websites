import '../styles/globals.scss';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { ClinicProvider } from '../contexts/clinic_provider';

function NectarTakeHome({ Component, pageProps }) {
  return (
    <ClinicProvider>
      <Component {...pageProps} />
    </ClinicProvider>
  );
}

export default NectarTakeHome;
