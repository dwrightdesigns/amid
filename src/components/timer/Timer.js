import React from "react";
import TimerButton from "./TimerButton.js";
import DigitsTimer from "./DigitsTimer";
import SkipButton from "./SkipButton";
import TaskTextArea from "./TaskTextArea";
import styled from "styled-components";

const TimerFlex = styled.div`
display: flex;
align-items: center;
flex-direction: column;
background: var(--main-color);
height: 100vh;
`;

function Timer() {
  return (
    
    <TimerFlex>
      <DigitsTimer />
      <TimerButton/>
      <TaskTextArea/>
      <SkipButton />
    </TimerFlex>

  );
}

export default Timer;
