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
    <div className="timer-item">
      <div className="flipUnitContainer">
        <div className="upperCard">
          <span>{counter}</span>
        </div>
        <div className="lowerCard">
          <span>{counter}</span>
        </div>
        <div className="flipCard fold">
          <span>{counter}</span>
        </div>
        <div className="flipCard unfold">
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
