import { useState } from "react";
import TimerStyled from "./TimerStyled";

const Timer = (): JSX.Element => {
  const initialDate = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  const endDate = new Date();
  endDate.setFullYear(2022);
  endDate.setMonth(7); // Month from 0 to 11
  endDate.setDate(25);
  endDate.setHours(0);
  endDate.setMinutes(0);
  endDate.setSeconds(0);

  const [state, setState] = useState(initialDate);

  setInterval(() => {
    const now = new Date().getTime();
    const time = endDate.getTime() - now;

    const result = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (time >= 0) {
      result.days = Math.floor(time / (1000 * 60 * 60 * 24));
      result.hours = Math.floor(
        (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      result.minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      result.seconds = Math.floor((time % (1000 * 60)) / 1000);
    }
    setState(result);
  }, 1000);

  return (
    <TimerStyled>
      <li className="timer__component">
        <span className="timer__data">{state.days}</span>
        <span className="timer__name">days</span>
      </li>
      <li className="timer__component">
        <span className="timer__data">{state.hours}</span>
        <span className="timer__name">hours</span>
      </li>
      <li className="timer__component">
        <span className="timer__data">{state.minutes}</span>
        <span className="timer__name">minutes</span>
      </li>
      <li className="timer__component">
        <span className="timer__data">{state.seconds}</span>
        <span className="timer__name">seconds</span>
      </li>
    </TimerStyled>
  );
};

export default Timer;
