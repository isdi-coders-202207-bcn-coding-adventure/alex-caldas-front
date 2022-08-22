import styled from "styled-components";

const TimerStyled = styled.ul`
  width: fit-content;
  height: fit-content;
  padding: 20px;
  background-color: #243342;
  display: flex;
  flex-direction: row;
  gap: 15px;

  .timer__component {
    display: flex;
    flex-direction: column;
  }
  .timer__data {
    font-weight: 600;
    font-size: 1.7rem;
    width: 4rem;
    height: 4rem;
    border-radius: 1rem;
    color: #243342;
    background-color: #ffc700;
    display: grid;
    place-items: center;
  }
  .timer__name {
    font-weight: 600;
    color: #b6d3e6;
    text-align: center;
  }
`;

export default TimerStyled;
