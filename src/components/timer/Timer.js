import React from "react";
import TimerButton from "./TimerButton.js";
import SkipButton from "./SkipButton";
import TaskTextArea from "./TaskTextArea";
import styled from "styled-components";
import * as timerStates from "../../timerStates";

const TimerFlex = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: var(--gradient-color);
  height: 90vh;

  iframe {
    display: none;
  }
`;

const DigitsOnTimer = styled.h1`
  margin-top: 7rem;
  margin-bottom: 3rem;
  color: var(--dark-color);
  text-align: ;
`;

const leftPad = (val) => {
  if (val < 10) return `0${val}`;

  return `${val}`;
};

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSession: true,
    };
  }

  render() {
    return (
      <>
        <TimerFlex>
          <DigitsOnTimer>
            {leftPad(this.props.hours.get("hours"))}:
            {leftPad(this.props.minutes.get("minutes"))}:
            {leftPad(this.props.seconds.get("seconds"))}
          </DigitsOnTimer>
          {this.props.timerState == timerStates.COMPLETE && (
              <iframe src="/amid-alarm.mp3" allow="autoplay" id="iframeAudio" />
          )}
          <TimerButton
            isPlaying={this.props.isPlaying}
            startTimer={this.props.startTimer}
            timerState={this.props.timerState}
            stopTimer={this.props.stopTimer}
            resetTimer={this.props.resetTimer}
          />
          <TaskTextArea />
          <SkipButton />
        </TimerFlex>
        )}
      </>
    );
  }
}

export default Timer;
