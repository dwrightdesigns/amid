import React from "react";
import TimerButton from "./TimerButton.js";
import SkipButton from "./SkipButton";
import TaskTextArea from "./TaskTextArea";
import styled from "styled-components";
import * as timerStates from "../../timerStates";
import BreathExCard from "./BreathExCard";
import ChoicePage from "../ChoicePage";
import BreathInstruct from "./instructions";
import { Link } from "react-router-dom";

const TimerFlex = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: var(--gradient-color);
  height: 100vh;

  iframe {
    display: none;
  }
`;

const DigitsOnTimer = styled.h1`
  margin-top: 7rem;
  margin-bottom: 3rem;
  color: var(--dark-color);
  text-align: ;
`;

const leftPad = (val) => {
  if (val < 10) return `0${val}`;

  return `${val}`;
};

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTimer: props.currentTimer,
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
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    this.play = this.play.bind(this);
    this.decreaseTimer = this.decreaseTimer.bind(this);
    this.skip = this.skip.bind(this);
    this.handleChangeTimer = this.handleChangeTimer.bind(this);
  }

  handleChangeTimer(activity) {
    this.props.onChangeTimer(activity);
  }

  play() {
    if (!this.state.isPlaying) {
      let intervalId = setInterval(this.decreaseTimer, 1000);
      this.setState({ intervalId: intervalId, isPlaying: true });
    }
  }

  skip() {
    this.setState({
      sessionType: this.state.sessionType === "focus" ? "break" : "focus",
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
    if (this.state.currentTimer === "focus") {
      // console.log("focus");
      return (
        <>
          <TimerFlex>
            <DigitsOnTimer>
              {leftPad(this.props.hours.get("hours"))}:
              {leftPad(this.props.minutes.get("minutes"))}:
              {leftPad(this.props.seconds.get("seconds"))}
            </DigitsOnTimer>
            {this.props.timerState == timerStates.COMPLETE && (
              <iframe src="/amid-alarm.mp3" allow="autoplay" id="iframeAudio" />
            )}
            <TimerButton
              isPlaying={this.props.isPlaying}
              startTimer={this.props.startTimer}
              timerState={this.props.timerState}
              stopTimer={this.props.stopTimer}
              resetTimer={this.props.resetTimer}
            />
            <TaskTextArea />
            <Link to="/break-choice">
              <SkipButton
                sessionType={
                  this.state.sessionType === "focus"
                    ? "Switch to Break"
                    : "Switch to Focus"
                }
              />
            </Link>
          </TimerFlex>
        </>
      );
    } else if (this.state.currentTimer === "breathing") {
      // console.log("breathing");

      return (
        <>
          <TimerFlex>
            <DigitsOnTimer>
              {leftPad(this.props.hours.get("hours"))}:
              {leftPad(this.props.minutes.get("minutes"))}:
              {leftPad(this.props.seconds.get("seconds"))}
            </DigitsOnTimer>
            {this.props.timerState == timerStates.COMPLETE && (
              <iframe src="/amid-alarm.mp3" allow="autoplay" id="iframeAudio" />
            )}
            <BreathExCard />
            <BreathInstruct />

            <SkipButton
              onClick={() => {
                this.handleChangeTimer("focus");
              }}
            />
          </TimerFlex>
        </>
      );
    } else if (this.state.currentTimer === "unstructured") {
      // console.log("unstructured");

      return (
        <>
          <TimerFlex>
            <DigitsOnTimer>
              {leftPad(this.props.hours.get("hours"))}:
              {leftPad(this.props.minutes.get("minutes"))}:
              {leftPad(this.props.seconds.get("seconds"))}
            </DigitsOnTimer>
            {this.props.timerState == timerStates.COMPLETE && (
              <iframe src="/amid-alarm.mp3" allow="autoplay" id="iframeAudio" />
            )}
            <TimerButton
              isPlaying={this.props.isPlaying}
              startTimer={this.props.startTimer}
              timerState={this.props.timerState}
              stopTimer={this.props.stopTimer}
              resetTimer={this.props.resetTimer}
            />

            <SkipButton
              sessionType={
                this.state.sessionType === "focus"
                  ? "Switch to Break"
                  : "Switch to Focus"
              }
            />
          </TimerFlex>
        </>
      );
    }
  }
}

export default Timer;
