import React from "react";
import TaskTextInput from "./TaskTextInput";
import TimerButton from "./TimerButton";
import styled from "styled-components";

const TimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`;

function Timer() {
  return <TimerWrapper></TimerWrapper>;
}

export default Timer;
