import React, { Component } from "react";
import styled from "styled-components";

const DigitsOnTimer = styled.h1`
  margin: 0 0 3rem 0;
  color: var(--dark-color);
  text-align: ;
`;

class DigitsTimer extends React.Component {
  constructor() {
    super();
    this.state = {
      isSession: true,
      timerSecond: 0,
      intervalId: 0,
    };
  }
  render() {
    return (
      <div>
        <DigitsOnTimer>
          {this.props.timerMinute}:
          {this.state.timerSecond === 0
            ? "00"
            : this.state.timerSecond < 10
            ? "0" + this.state.timerSecond
            : this.state.timerSecond}
        </DigitsOnTimer>
      </div>
    );
  }
}
export default DigitsTimer;
