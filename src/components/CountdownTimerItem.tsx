import { useEffect, useState } from "react";

const CountdownTimerItem = ({ counter, title }: IProps) => {
  const [flip, setFlip] = useState(true);

  useEffect(() => {
    console.log("ENTER");

    const interval = setInterval(() => {
      console.log("test");
      setFlip((flip) => !flip);
      // setFlip((flip) => !flip);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    // <div className="timer-item">
    //   <div className="timer-item_square">{counter}</div>
    //   <div className="timer-item_title">{title}</div>
    // </div>
    <div className={`flip-clock__piece ${flip ? "flip" : ""}`}>
      <div className="flip-clock__card card">
        <div className="card__top">{counter}</div>
        <div className="card__bottom" data-value={counter}></div>
        <div className="card__back" data-value={counter}>
          <div className="card__bottom" data-value={counter}></div>
        </div>
      </div>
      <div className="flip-clock__slot">{title}</div>
    </div>
  );
};

type IProps = {
  counter: number;
  title: string;
};

export { CountdownTimerItem };
