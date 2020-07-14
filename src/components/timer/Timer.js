import React, { useState, useEffect } from "react";
import TimerButton from "./TimerButton.js";
import DigitsTimer from "./DigitsTimer";
import SkipButton from "./SkipButton";
import TaskTextArea from "./TaskTextArea";
import styled from "styled-components";
import BreathExCard from "./BreathExCard";
import ChoicePage from "../ChoicePage";
import BreathInstruct from "./instructions";

const TimerFlex = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: var(--gradient-color);
  height: 90vh;
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
      isPlaying: false,
      sessionType: "focus",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    this.play = this.play.bind(this);
    this.decreaseTimer = this.decreaseTimer.bind(this);
    this.skip = this.skip.bind(this);
  }

  play() {
    if (!this.state.isPlaying) {
      let intervalId = setInterval(this.decreaseTimer, 1000);
      this.setState({ intervalId: intervalId, isPlaying: true });
    }
  }

  skip() {
    this.setState({
      sessionType: this.state.sessionType === "focus" ? "break" : "focus"
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
      <>
        {this.state.isSession === false &&
        this.state.sessionType === "focus" ? (
          <ChoicePage />
        ) : (
          <TimerFlex>
            <DigitsOnTimer>
              {this.props.timerMinute}:
              {this.state.timerSecond === 0
                ? "00"
                : this.state.timerSecond < 10
                ? "0" + this.state.timerSecond
                : this.state.timerSecond}
            </DigitsOnTimer>
            <TimerButton
              play={this.play}
              start={this.state.start}
              timerMinute={
                this.state.isSession
                  ? this.props.breakDuration
                  : this.props.focusDuration
              }
              isPlaying={this.state.isPlaying}
            />
            <BreathInstruct/>
            {/* <TaskTextArea /> */}
            <SkipButton onClick={this.skip} sessionType={this.state.sessionType === "focus" ? "Switch to Break" : "Switch to Focus"} />
          </TimerFlex>
        )}
      </>
    );
  }
}

export default Timer;
