import React from "react";
// import TaskTextInput from "./TaskTextInput";
// import TimerButton from "./TimerButton";
import DigitsTimer from "./DigitsTimer";
import SkipButton from "./SkipButton";
function Timer() {
  return (
    <>
      <DigitsTimer />
      {/* <TaskTextInput /> */}
      <SkipButton />
    </>
  );
}

export default Timer;
