import React from "react";
import TimerButton from "./TimerButton.js";
import DigitsTimer from "./DigitsTimer";
import SkipButton from "./SkipButton";
import TaskTextArea from "./TaskTextArea";
import styled from "styled-components";
import BreathingEx from "../BreathingEx.js";

const TimerFlex = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: var(--main-color);
  height: 100vh;
`;

class Timer extends React.Component {
  state = {
    focusDuration: 50,
    breakDuration: 10,
    breakChoice: "BreathingEx",
  };

  render() {
    return (
      <TimerFlex>
        <DigitsTimer />
        <TimerButton />
        <TaskTextArea />
        <SkipButton />
      </TimerFlex>
    );
  }
}

export default Timer;
