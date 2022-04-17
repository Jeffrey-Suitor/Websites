import { useClinic } from '../contexts/clinic_provider';
import { Container, Nav, Navbar, Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { InlineIcon } from '@iconify/react';
import emailIcon from '@iconify/icons-mdi/email-outline';
import phoneIcon from '@iconify/icons-mdi/phone';
import timeIcon from '@iconify/icons-mdi/clock-time-five-outline';
import dateIcon from '@iconify/icons-mdi/calendar-range';

export default function NectarHeader() {
  const { currentClinic } = useClinic();

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <>
      <Navbar collapseOnSelect fixed="top" bg="light" expand="sm">
        <Container>
          <Navbar.Brand>
            <img
              alt=""
              src="/nectar.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            {currentClinic.name}
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="mx-3">
              <InlineIcon className="mx-1" icon={emailIcon} />
              Email: {currentClinic.email}
            </Navbar.Text>
            <Navbar.Text className="mx-3">
              <InlineIcon className="mx-1" icon={phoneIcon} />
              Phone: {currentClinic.phone}
            </Navbar.Text>
            <Navbar.Text className="mx-3">
              <InlineIcon className="mx-1" icon={dateIcon} />
              Date: {time.toDateString()}
            </Navbar.Text>
            <Navbar.Text>
              <InlineIcon className="mx-1" icon={timeIcon} />
              Time:{' '}
              {time.toLocaleTimeString(
                typeof window !== 'undefined' ? navigator.language : 'en-US',
                {
                  hour: '2-digit',
                  minute: '2-digit',
                }
              )}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
