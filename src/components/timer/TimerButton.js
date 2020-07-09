import React, { Component } from "react";
import styled from "styled-components";

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
      </>
    );
  }
}
export default TimerButton;
