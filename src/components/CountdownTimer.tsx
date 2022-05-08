import { CountdownTimerItem } from "./CountdownTimerItem";

const CountdownTimer = () => (
  <div className="countdown-timer">
    <div className="countdown-timer_title">
      <h2>WE'RE LAUNCHING SOON</h2>
    </div>
    <div className="countdown-timer_items">
      <CountdownTimerItem counter={0} title="days" />
      <CountdownTimerItem counter={0} title="hours" />
      <CountdownTimerItem counter={0} title="minutes" />
      <CountdownTimerItem counter={0} title="seconds" />
    </div>
  </div>
);

export { CountdownTimer };
