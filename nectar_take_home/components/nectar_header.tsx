import { useClinic } from '../contexts/clinic_provider';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { InlineIcon } from '@iconify/react';
import emailIcon from '@iconify/icons-mdi/email-outline';
import phoneIcon from '@iconify/icons-mdi/phone';
import timeIcon from '@iconify/icons-mdi/clock-time-five-outline';
import dateIcon from '@iconify/icons-mdi/calendar-range';
import datePickerIcon from '@iconify/icons-mdi/calendar-edit';
import DatePicker from 'react-datepicker';
import { useDate } from '../contexts/date_provider';

export default function NectarHeader() {
  const { currentClinic } = useClinic();
  const { currentDate, setCurrentDate } = useDate();

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <>
      <Navbar
        collapseOnSelect
        fixed="top"
        bg="light"
        expand="lg"
        className="px-3"
      >
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
        <Nav className="px-3 flex-grow-1">
          <Navbar.Text style={{ width: '12rem' }}>
            <InlineIcon icon={datePickerIcon} className="mx-1" />
            Date Selector:
          </Navbar.Text>
          <DatePicker
            selected={currentDate}
            onChange={(date) => setCurrentDate(date)}
          />
        </Nav>
        <Navbar.Toggle aria-controls="dropdown-nav" />
        <Navbar.Collapse id="dropdown-nav" className="justify-content-end">
          <Nav>
            <Navbar.Text className="px-1">
              <InlineIcon className="mx-1" icon={emailIcon} />
              Email: {currentClinic.email}
            </Navbar.Text>
            <Navbar.Text className="px-1">
              <InlineIcon className="mx-1" icon={phoneIcon} />
              Phone: {currentClinic.phone}
            </Navbar.Text>
            <Navbar.Text className="px-1">
              <InlineIcon className="mx-1" icon={dateIcon} />
              Date: {time.toDateString()}
            </Navbar.Text>
            <Navbar.Text className="px-1">
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
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
