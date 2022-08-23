import { useState } from "react";
import TimerStyled from "./TimerStyled";

const Timer = (): JSX.Element => {
  interface Time {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }

  const initialState: Time = {
    days: 31,
    hours: 24,
    minutes: 60,
    seconds: 60,
  };

  const [state, setState] = useState(initialState);

  setInterval(() => {
    const date = new Date();
    const newDate: Time = {
      days: initialState.days - date.getDay(),
      hours: initialState.hours - date.getHours(),
      minutes: initialState.minutes - date.getMinutes(),
      seconds: initialState.seconds - date.getSeconds(),
    };
    setState(newDate);
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
