import { useEffect, useMemo, useState } from "react";

import { Footer } from "../components/Footer";
import { CountdownTimer } from "../components/CountdownTimer";

const CountdownContainer = () => {
  const [remainingTime, setRemainingTime] = useState(
    getRemainingTimeUntilEndOfMonth()
  );
  const { days, hours, minutes, seconds } = useMemo(() => {
    const { days, hours, minutes, seconds } =
      getDifferenceInDaysHoursMinutesSeconds(remainingTime);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }, [remainingTime]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(getRemainingTimeUntilEndOfMonth());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-countdown">
      {remainingTime && (
        <CountdownTimer
          days={addPrefixIfLowerThanTen(days)}
          hours={addPrefixIfLowerThanTen(hours)}
          minutes={addPrefixIfLowerThanTen(minutes)}
          seconds={addPrefixIfLowerThanTen(seconds)}
        />
      )}
      <Footer />
    </div>
  );
};

const getRemainingTimeUntilEndOfMonth = () => {
  const now = new Date();
  const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  return endOfMonth.getTime() - now.getTime();
};

const addPrefixIfLowerThanTen = (number) => {
  return number < 10 ? `0${number}` : number;
};

const getDifferenceInDaysHoursMinutesSeconds = (remainingTime: number) => {
  // get total seconds between the times
  let remaining = remainingTime / 1000;
  // calculate (and subtract) whole days
  const days = Math.floor(remaining / 86400);
  remaining -= days * 86400;
  // calculate (and subtract) whole hours
  const hours = Math.floor(remaining / 3600) % 24;
  remaining -= hours * 3600;
  // calculate (and subtract) whole minutes
  const minutes = Math.floor(remaining / 60) % 60;
  remaining -= minutes * 60;
  // what's left is seconds
  const seconds = Math.floor(remaining % 60); // in theory the modulus is not required

  return { days, hours, minutes, seconds };
};

export { CountdownContainer };
