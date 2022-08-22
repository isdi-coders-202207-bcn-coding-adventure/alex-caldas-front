import "./TimerStyled.css";

const Timer = (): JSX.Element => {
  return (
    <>
      <ul>
        <li>
          <span>02</span>
          <span>days</span>
        </li>
        <li>
          <span>20</span>
          <span>hours</span>
        </li>
        <li>
          <span>34</span>
          <span>minutes</span>
        </li>
        <li>
          <span>09</span>
          <span>second</span>
        </li>
      </ul>
    </>
  );
};

export default Timer;
