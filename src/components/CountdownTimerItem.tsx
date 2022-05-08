import { useEffect, useState } from "react";

const CountdownTimerItem = ({ counter, title }: IProps) => {
  const [flip, setFlip] = useState(true);
  const [value, setValue] = useState(null);

  useEffect(() => {
    setFlip((flip) => !flip);
    setTimeout(() => {
      setValue(counter);
    }, 300);
  }, [counter]);

  return (
    <div className="timer-item">
      <div className="flipUnitContainer">
        <div className="upperCard">
          <span>{value ?? ""}</span>
        </div>
        <div className="lowerCard">
          <span>{value ?? ""}</span>
        </div>
        <div className={`flipCard ${flip ? "fold" : "unfold"}`}>
          <span>{value ?? ""}</span>
        </div>
        <div className={`flipCard ${flip ? "unfold" : "fold"}`}>
          <span>{value ?? ""}</span>
        </div>
      </div>
      <div className="timer-item_title">{title}</div>
    </div>
  );
};

type IProps = {
  counter: number;
  title: string;
};

export { CountdownTimerItem };
