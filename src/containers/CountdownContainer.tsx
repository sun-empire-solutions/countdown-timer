import { TimerItem } from "./../components/TimerItem";

const CountdownContainer = () => {
  return (
    <div className="container-countdown">
      <div className="tittle">
        <h5>WE'RE LAUNCHING SOON</h5>
      </div>
      <div className="timer-items-container">
        <div className="timer-container">
          <TimerItem />
          <p>DAYS</p>
        </div>
        <div className="timer-container">
          <TimerItem />
          <p>HOURS</p>
        </div>
        <div className="timer-container">
          <TimerItem />
          <p>MINUTES</p>
        </div>
        <div className="timer-container">
          <TimerItem />
          <p>SECONDS</p>
        </div>
      </div>
    </div>
  );
};

export { CountdownContainer };
