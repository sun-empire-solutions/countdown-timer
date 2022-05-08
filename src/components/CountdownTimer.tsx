import { CountdownTimerItem } from "./CountdownTimerItem";

const CountdownTimer = () => (
  <div className="countdown-timer">
    <div className="countdown-timer_title">
      <h2>WE'RE LAUNCHING SOON</h2>
    </div>
    <div className="countdown-timer_items">
      <CountdownTimerItem counter={0} title="DAYS" />
      <CountdownTimerItem counter={0} title="HOURS" />
      <CountdownTimerItem counter={0} title="MINUTES" />
      <CountdownTimerItem counter={0} title="SECONDS" />
    </div>
  </div>
);

export { CountdownTimer };
