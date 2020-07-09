import React, { useState, useEffect } from "react";
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

const DigitsOnTimer = styled.h1`
  margin-top: 7rem;
  margin-bottom: 3rem;
  color: var(--dark-color);
  text-align: ;
`;

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakChoice: "BreathingEx",
      isSession: true,
      timerSecond: 0,
      intervalId: 0,
      action: "",
    };

    this.play = this.play.bind(this);
    this.decreaseTimer = this.decreaseTimer.bind(this);
    this.skip = this.skip.bind(this);
  }

  play() {
    let intervalId = setInterval(this.decreaseTimer, 1000);

    this.setState({
      intervalId: intervalId,
    });
  }

  skip() {
    this.setState({
      isSession: !this.state.isSession,
    });
  }

  decreaseTimer() {
    switch (this.state.timerSecond) {
      case 0:
        if (this.props.timerMinute === 0) {
          if (this.state.isSession) {
            this.setState({
              isSession: false,
            });

            this.props.toggleInterval(this.state.isSession);
          } else {
            this.setState({
              isSession: true,
            });

            this.props.toggleInterval(this.state.isSession);
          }
        } else {
          this.props.updateTimerMinute();
          this.setState({
            timerSecond: 59,
          });
        }
        break;
      default:
        this.setState((prevState) => {
          return {
            timerSecond: prevState.timerSecond - 1,
          };
        });
        break;
    }
  }

  render() {
    return (
      <TimerFlex>
        <DigitsOnTimer>
          {this.props.timerMinute}:
          {this.state.timerSecond === 0
            ? "00"
            : this.state.timerSecond < 10
            ? "0" + this.state.timerSecond
            : this.state.timerSecond}
        </DigitsOnTimer>
        <TimerButton play={this.play} start={this.state.start} />
        <TaskTextArea />
        <SkipButton onClick={this.skip} isSession={this.state.isSession} />
      </TimerFlex>
    );
  }
}

export default Timer;
