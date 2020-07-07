import React, { Component } from "react";
import styled from "styled-components";

const DigitsOnTimer = styled.h1`
margin-top: 7rem;
margin-bottom: 3rem;
color: var(--dark-color);`;

const TimerEnd = styled.h1`
margin-top: 7rem;
margin-bottom: 3rem;
color: var(--dark-color);
`;



class DigitsTimer extends Component {

  state = {
    minutes: 10,
    seconds: 0
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1
        }))
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval)
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59
          }))
        }
      }
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.myInterval)
  }

  render() {

    const { minutes, seconds } = this.state

    return (
      <div>
        {minutes === 0 && seconds === 0
          ? <TimerEnd>Times Up!</TimerEnd>
          : <DigitsOnTimer> {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</DigitsOnTimer>
        }
      </div>
    )
  }

}
export default DigitsTimer;