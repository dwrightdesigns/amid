import React from "react";
import "./App.scss";
import moment from "moment";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Timer from "./components/timer/Timer";
import Landing from "./LandingPage";
import ChoicePage from "./components/ChoicePage";

import About from "./components/About";

import * as timerStates from "./timerStates";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTimer: "focus",
      focusTime: moment.duration(50, "minutes"),
      focusSet: moment.duration(50, "minutes"),
      breakTime: moment.duration(10, "minutes"),
      breakSet: moment.duration(10, "minutes"),
      timerState: timerStates.NOT_SET,
      timer: null,
      paused: true,
      isPlaying: false,
    };
    this.setBreakSet = this.setBreakSet.bind(this);
    this.setFocusSet = this.setFocusSet.bind(this);
    this.reduceBreakTimer = this.reduceBreakTimer.bind(this);
    this.startBreakTimer = this.startBreakTimer.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.reduceFocusTimer = this.reduceFocusTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.stopBreakTimer = this.stopBreakTimer.bind(this);
    this.completeTimer = this.completeTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.resetBreakTimer = this.resetBreakTimer.bind(this);
    this.handleChangeTimer = this.handleChangeTimer.bind(this);
  }

  handleChangeTimer(activity) {
    this.setState({ currentTimer: activity });
    // console.log("changed state to:", activity);
  }

  setFocusSet(newFocusSet) {
    this.setState({
      focusSet: newFocusSet,
      focusTime: newFocusSet,
    });
  }

  setBreakSet(newBreakSet) {
    this.setState({
      breakSet: newBreakSet,
      breakTime: newBreakSet,
    });
  }

  startTimer() {
    this.setState({
      timerState: timerStates.RUNNING,
      timer: setInterval(this.reduceFocusTimer, 1000),
      paused: false,
    });
  }

  stopTimer() {
    if (this.state.timer) {
      clearInterval(this.state.timer);
    }
    this.setState({
      timerState: timerStates.NOT_SET,
      timer: null,
      paused: true,
      isPlaying: true,
    });
  }

  resetTimer() {
    if (this.state.timer) {
      clearInterval(this.state.timer);
    }
    this.setState({
      timerState: timerStates.NOT_SET,
      timer: null,
      paused: true,
      isPlaying: true,
      focusTime: moment.duration(this.state.focusSet),
    });
  }

  reduceFocusTimer() {
    if (
      this.state.focusTime.get("hours") === 0 &&
      this.state.focusTime.get("minutes") === 0 &&
      this.state.focusTime.get("seconds") === 0
    ) {
      this.completeTimer();
      return;
    }
    const newTime = moment.duration(this.state.focusTime);
    newTime.subtract(1, "second");

    this.setState({
      focusTime: newTime,
    });
  }

  completeTimer() {
    if (this.state.timer) {
      clearInterval(this.state.timer);
    }

    this.setState({
      timerState: timerStates.COMPLETE,
      timer: null,
    });
  }

  // break timer

  startBreakTimer() {
    this.setState({
      timerState: timerStates.RUNNING,
      timer: setInterval(this.reduceBreakTimer, 1000),
      paused: false,
    });
  }

  stopBreakTimer() {
    if (this.state.timer) {
      clearInterval(this.state.timer);
    }
    this.setState({
      timerState: timerStates.NOT_SET,
      timer: null,
      paused: true,
      isPlaying: true,
    });
  }

  resetBreakTimer() {
    if (this.state.timer) {
      clearInterval(this.state.timer);
    }
    this.setState({
      timerState: timerStates.NOT_SET,
      timer: null,
      breakTime: moment.duration(this.state.breakSet),
    });
  }

  reduceBreakTimer() {
    if (
      this.state.breakTime.get("hours") === 0 &&
      this.state.breakTime.get("minutes") === 0 &&
      this.state.breakTime.get("seconds") === 0
    ) {
      this.completeTimer();
      return;
    }
    const newTime = moment.duration(this.state.breakTime);
    newTime.subtract(1, "second");

    this.setState({
      breakTime: newTime,
    });
  }

  render() {
    return (
      <div className="App">
        <Header
          focusSet={this.state.focusSet}
          breakSet={this.state.breakSet}
          setFocusSet={this.setFocusSet}
          setBreakSet={this.setBreakSet}
          timerState={this.state.timerState}
        />
        <Switch>
          <Route exact path="/">
            <Landing onChangeTimer={this.handleChangeTimer} />
          </Route>
          <Route path="/break-choice">
            <ChoicePage onChangeTimer={this.handleChangeTimer} />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/timer">
            <Timer
              currentTimer={this.state.currentTimer}
              onChangeTimer={this.handleChangeTimer}
              hours={this.state.focusTime}
              minutes={this.state.focusTime}
              seconds={this.state.focusTime}
              startTimer={this.startTimer}
              stopTimer={this.stopTimer}
              timerState={this.state.timerState}
              isPlaying={this.state.isPlaying}
              completeTimer={this.completeTimer}
              breakHours={this.state.breakTime}
              breakMinutes={this.state.breakTime}
              breakSeconds={this.state.breakTime}
              startBreakTimer={this.startBreakTimer}
              stopBreakTimer={this.stopBreakTimer}
              resetBreakTimer={this.resetBreakTimer}
              resetTimer={this.resetTimer}
            />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
