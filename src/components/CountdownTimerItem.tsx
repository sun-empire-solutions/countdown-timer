const CountdownTimerItem = ({ counter, title }: IProps) => {
  return (
    <div className="timer-item">
      <div className="timer-item_square">{counter}</div>
      <div className="timer-item_title">{title}</div>
    </div>
  );
};

type IProps = {
  counter: number;
  title: string;
};

export { CountdownTimerItem };
