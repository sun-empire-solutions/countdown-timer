import { useEffect, useState } from "react";

const CountdownTimerItem = ({ counter, title }: IProps) => {
  const [flip, setFlip] = useState(true);

  useEffect(() => {
    setFlip((flip) => !flip);
  }, [counter]);

  return (
    <div className="timer-item">
      <div className="flipUnitContainer">
        <div className="upperCard">
          <span>{counter}</span>
        </div>
        <div className="lowerCard">
          <span>{counter}</span>
        </div>
        <div className={`flipCard ${flip ? "fold" : "unfold"}`}>
          <span>{counter}</span>
        </div>
        <div className={`flipCard ${flip ? "unfold" : "fold"}`}>
          <span>{counter}</span>
        </div>
      </div>
    </div>
  );
};

type IProps = {
  counter: number;
  title: string;
};

export { CountdownTimerItem };
