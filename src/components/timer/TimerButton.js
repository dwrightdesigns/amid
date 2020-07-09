import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { motion, useSpring } from "framer-motion";

const rotate = keyframes`
 
`;

const TimerButtonStyle = styled.button`
    
    display: inline-block;
    margin-bottom: 3rem;
    height: 200px;
    width: 200px;
    background: var(--light-color);
    color: var(--dark-color);
    text-align; center;
    font-size: 1.0625rem;
    font-weight: 400;
    border: 4px solid var(--dark-color);
    border-radius: 50%;
    cursor: pointer;
    text-align: center;
    outline: none;
    transition: background 250ms ease-in-out, 
    transform 150ms ease;
    
    &:hover {
        background: var(--dark-color);
        color: var(--light-color);
    }
`;

const Test = styled.path`
  stroke-dasharray: 314;
  stroke-dashoffset: 0;

  animation: count 30s linear;
  @keyframes count {
    to {
      stroke-dashoffset: 314;
    }
  }
`;

const TextInsideButton = styled.h3`
  text-align: center;
  width: 5rem;
  color: $dark-color;
`;

class TimerButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <TimerButtonStyle onClick={this.props.play}>
          {this.props.play === true ? this.props.start : this.props.pause}
        </TimerButtonStyle>

        <svg width={202} height={202} fill="none">
          <Test
            d="M101 51c-27.614 0-50 22.386-50 50s22.386 50 50 50 50-22.386 50-50c0-26.438-22-49.5-49-50"
            stroke="#F2F2F2"
            strokeWidth={100}
          />
          <circle
            cx={101}
            cy={101}
            r={99}
            stroke="url(#prefix__pattern0)"
            strokeWidth={3}
          />
          <circle cx={101} cy={101} r={99} stroke="#1B1B1B" strokeWidth={4} />
        </svg>
      </>
    );
  }
}

export default TimerButton;
