import { useEffect, useMemo, useState } from "react";

import { Footer } from "../components/Footer";
import { CountdownTimer } from "../components/CountdownTimer";

const CountdownContainer = () => {
  const [remainingTime, setRemainingTime] = useState(0);
  const { days, hours, minutes, seconds } = useMemo(() => {
    const remaining = new Date(remainingTime);
    return {
      days: remaining.getDay(),
      hours: remaining.getHours(),
      minutes: remaining.getMinutes(),
      seconds: remaining.getSeconds(),
    };
  }, [remainingTime]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(getRemainingTimeUntilEndOfMonth());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getRemainingTimeUntilEndOfMonth = () => {
    const now = new Date();
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    return endOfMonth.getTime() - now.getTime();
  };

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

const addPrefixIfLowerThanTen = (number) => {
  return number < 10 ? `0${number}` : number;
};

export { CountdownContainer };
