import "./TimerStyled.css";

const Timer = (): JSX.Element => {
  return (
    <ul className="timer">
      <li className="timer__component">
        <span className="timer__data">02</span>
        <span className="timer__name">days</span>
      </li>
      <li className="timer__component">
        <span className="timer__data">20</span>
        <span className="timer__name">hours</span>
      </li>
      <li className="timer__component">
        <span className="timer__data">34</span>
        <span className="timer__name">minutes</span>
      </li>
      <li className="timer__component">
        <span className="timer__data">09</span>
        <span className="timer__name">second</span>
      </li>
    </ul>
  );
};

export default Timer;
