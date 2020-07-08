import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

import { motion, useSpring } from "framer-motion";

const rotate = keyframes`
 
`;
const TimerButtonStyle = styled.button`
    
    display: inline-block;
    border: none;
    margin-bottom: 3rem;
    padding: 3.5rem 3.5rem;
    text-decoration: none;
    background: var(--light-color);
    color: var(--dark-color);
    font-family: sans-serif;
    text-align; center;
    font-size: 1.0625rem;
    font-weight: 400;
    border-style: solid;
    border-width: 3px;
    border-color: var(--dark-color);;
    border-radius: 50%;
    cursor: pointer;
    text-align: center;
    
    &:hover {
        background: $dark-color;
        color: $light-color;
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
function TimerButton() {
  return (
    <>
      <TimerButtonStyle>
        <TextInsideButton>Start Break</TextInsideButton>
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
export default TimerButton;
