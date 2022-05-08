import { CountdownTimerItem } from "./CountdownTimerItem";

const CountdownTimer = ({ days, hours, minutes, seconds }: IProps) => (
  <div className="countdown-timer">
    <div className="countdown-timer_title">WE'RE LAUNCHING SOON</div>
    <div className="countdown-timer_items">
      <CountdownTimerItem counter={days} title="days" />
      <CountdownTimerItem counter={hours} title="hours" />
      <CountdownTimerItem counter={minutes} title="minutes" />
      <CountdownTimerItem counter={seconds} title="seconds" />
    </div>
  </div>
);

type IProps = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export { CountdownTimer };
