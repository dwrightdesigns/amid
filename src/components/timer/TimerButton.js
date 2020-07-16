import React from "react";
import styled from "styled-components";
import * as timerStates from "../../timerStates";

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

  @keyframes count {
    to {
      stroke-dashoffset: 315px;
    }
  }

  &:hover {
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

class TimerButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.getButton = this.getButton.bind(this);
  }

  animation() {
    const style = {
      animation: `count ${this.props.focusSet.asSeconds()}s linear`,
      // animationPlayState:
      //   this.props.timerState === timerStates.RUNNING ? "running" : "paused",
      // animationDelay:
      //   ((this.props.focusSet.asSeconds() - this.props.time.asSeconds()) * -1) /
      //     4 +
      //   "s",
    };
    return style;
  }

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
        >
          <Test
            d="M101 51c-27.614 0-50 22.386-50 50s22.386 50 50 50 50-22.386 50-50c0-26.438-22-50-50-50"
            stroke="var(--light-color)"
            strokeWidth={100}
            style={this.animation()}
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
        <StyledButton onClick={this.props.resetTimer}>
          <h4>Reset</h4>
        </StyledButton>
      );
  }
  render() {
    return (
      <>
        <ButtonContainer>{this.getButton()}</ButtonContainer>
      </>
    );
  }
}

export default TimerButton;
