import React from "react";
import BreakOptionInput from "./BreakOptionInput";
import TaskTextInput from "./TaskTextInput";
import TimerButton from "./TimerButton";
import DigitsTimer from "./DigitsTimer";
import SkipButton from "./SkipButton";
function Timer() {
  return (
    <>
      <DigitsTimer />
      <BreakOptionInput />
      <TaskTextInput />
      <SkipButton />

    </>
  );
}

export default Timer;
