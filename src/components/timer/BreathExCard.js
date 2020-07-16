import React, { Component } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import * as timerStates from "../../timerStates";

const ButtonContainer = styled.div`
  margin: 0 0 2rem 0;
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

const CardFrame = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 202px;
  height: 202px;
  background: rgba(229, 229, 229, 0.5);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  border: 4px solid var(--light-color);

  &:hover:before {
    content:"Pause";
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(229, 229, 229, 0.25);
  }
`;

const BreatheVariant = {
  hidden: {
    scale: 1,
  },
  visible: {
    scale: [1, 0.6, 1],
    opacity: [1, 0.5, 1],
    transition: {
      duration: 16,
      times: [0, 0.3, 1],
      loop: Infinity,
    },
  },
};

class BreathExCard extends Component {
  constructor() {
    super();
  }

  getButton() {
    if (this.props.timerState === timerStates.NOT_SET)
      return (
        <StyledButton onClick={this.props.startBreakTimer}>
          <h4>Start</h4>
        </StyledButton>
      );

    if (this.props.timerState === timerStates.RUNNING)
      return (
        <CardFrame
          variants={BreatheVariant}
          initial="hidden"
          animate="visible"
          onClick={this.props.stopBreakTimer}
        ></CardFrame>
      );

    if (this.props.timerState === timerStates.COMPLETE)
      return (
        <StyledButton onClick={this.props.resetBreakTimer}>
          <h4>Reset</h4>
        </StyledButton>
      );
  }

  render() {
    return (
      <div>
        <ButtonContainer>{this.getButton()}</ButtonContainer>
      </div>
    );
  }
}
export default BreathExCard;
