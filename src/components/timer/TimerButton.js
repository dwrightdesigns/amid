import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import * as timerStates from "../../timerStates";
import BreathExCard from "./BreathExCard";

const ButtonContainer = styled.div`
  margin: 0 0 2rem 0;
`;

const TimerButtonStyle = styled.svg`
  cursor: pointer;
  outline: none;
`;

const Test = styled.path`
  stroke-dasharray: 315px;
  stroke-dashoffset: 0px;

  animation-name: count;
  animation-direction: linear;
  animation-duration: 60s;


  @keyframes count {
    to {
      stroke-dashoffset: 315px;
    }
  }

  &:hover {
    // stroke: var(--dark-color);
    opacity: 0.5;
  }
`;

const StyledButton = styled.button`
  width: 202px;
  height: 202px;
  background-color: var(--light-color);
  border: 4px solid var(--light-color);
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    border: 4px solid var(--light-color);
    background-color: rgba(229, 229, 229, 0.5);
  }
`;

class TimerButton extends Component {
  constructor(props) {
    super(props);

    //   const duration = props.duration || 1000,
    //     n = (props.loops == 0) ? 0 : props.loops ? props.loops : 1,
    //     end = Date.now() + duration * n,
    //     totalDuration = duration * n;

    //   this.state = {
    //     duration: duration,
    //     loops: n,
    //     end: end,
    //     totalDuration: totalDuration,
    //     showDuration: false,
    //   };

    this.getButton = this.getButton.bind(this);
  }

  // frame() {
  //   const current = Date.now(),
  //   remaining = this.state.end - current,
  //   rate = this.state.loops + 1 - remaining /this.state.duration;

  //   if(remaining < 60) {
  //     this.draw(this.state.loops - 0.0001);
  //     if (remaining < this.state.totalDuration && this.state.loops) return
  //   }

  //   if (this.props.reverse && this.props.reverse === true) {
  //     rate = 360 - rate;
  //   }

  //   this.draw(rate);
  //   requestAnimationFrame(this.frame.bind(this));
  // }

  // draw(rate) {
  //   let angle = 360 * rate;

  //   angle %= 360;

  //   let rad = (angle * Math.PI / 180),
  //     x - Math.sin(rad) * (this.props.width / 2),
  //     y = Math.cos(rad) * (this.props.height / 2),
  //     mid = (angle > 180) ? 1 : 0,
  //     sweepDirection = 1;

  //     if(this.props.inverse && this.props.inverse === true) {
  //       mid = Math.abs(mid - 1);
  //       sweepDirection = 0;
  //     }
  // }

  getButton() {
    if (this.props.timerState === timerStates.NOT_SET)
      return (
        <StyledButton onClick={this.props.startTimer}>
          <h4>Start</h4>
        </StyledButton>
      );

    if (this.props.timerState === timerStates.RUNNING)
      return (
        <TimerButtonStyle
          width={202}
          height={202}
          fill="none"
          onClick={this.props.stopTimer}
        >
          <Test
            d="M101 51c-27.614 0-50 22.386-50 50s22.386 50 50 50 50-22.386 50-50c0-26.438-22-50-50-50"
            stroke="var(--light-color)"
            strokeWidth={100}
            style={{
              animationDuration: `${
                this.props.timerState === timerStates.RUNNING &&
                this.props.isPlaying &&
                this.props.stopTimer
                  ? this.props.focusSet * 60
                  : 0
              }s`,
            }}
          />
          <circle
            cx={101}
            cy={101}
            r={99}
            stroke="var(--light-color)"
            strokeWidth={4}
          />
        </TimerButtonStyle>
      );

    if (this.props.timerState === timerStates.COMPLETE)
      return (
        <StyledButton onClick={this.props.stopTimer}>
          <h4>Reset</h4>
        </StyledButton>
      );
  }

  render() {
    return <ButtonContainer>{this.getButton()}</ButtonContainer>;
  }
}

export default TimerButton;
