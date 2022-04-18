import {
  createContext,
  useState,
  useContext,
  SetStateAction,
  Dispatch,
} from 'react';

interface DateProviderInterface {
  currentDate: Date;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
  timeslots: Date[];
}

const DateContext = createContext<DateProviderInterface>({
  currentDate: new Date(),
  setCurrentDate: () => {},
  timeslots: [],
});

export const useDate = () => useContext(DateContext);

export const DateProvider = ({ children }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const timeslots = [];
  for (let i = 0; i < 33; i++) {
    // 32 timeslots of 15 minutes each
    const time = new Date(currentDate.getTime());
    time.setHours(9);
    time.setMinutes(i * 15);
    time.setSeconds(0);
    timeslots.push(time);
  }

  return (
    <DateContext.Provider value={{ currentDate, setCurrentDate, timeslots }}>
      {children}
    </DateContext.Provider>
  );
};
