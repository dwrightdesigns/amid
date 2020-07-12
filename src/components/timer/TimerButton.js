import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

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
    stroke: var(--dark-color);
  }
`;

class TimerButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <TimerButtonStyle
          width={202}
          height={202}
          fill="none"
          onClick={this.props.play}
        >
          <Test
            d="M101 51c-27.614 0-50 22.386-50 50s22.386 50 50 50 50-22.386 50-50c0-26.438-22-50-50-50"
            stroke="#F2F2F2"
            strokeWidth={100}
            style={{animationDuration: `${this.props.isPlaying ? this.props.timerMinute * 60 : 0}s`}}
          />
          <circle cx={101} cy={101} r={99} stroke="#1B1B1B" strokeWidth={4} />
        </TimerButtonStyle>
      </>
    );
  }
}

export default TimerButton;
