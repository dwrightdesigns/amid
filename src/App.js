import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header";
import Timer from "./components/timer/Timer";
import Landing from "./components/LandingPage";
import ChoicePage from "./components/breakChoice/ChoicePage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focusDuration: 50,
      breakDuration: 10,
      timerMinute: 50,
    };

    this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
    this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);
    this.onIncreaseFocusLength = this.onIncreaseFocusLength.bind(this);
    this.onDecreaseFocusLength = this.onDecreaseFocusLength.bind(this);
    this.onToggleInterval = this.onToggleInterval.bind(this);
    this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this);
  }

  onIncreaseBreakLength() {
    this.setState((prevState) => {
      return {
        breakDuration: prevState.breakDuration + 1,
        timerMinute: prevState.breakDuration + 1,
      };
    });
  }

  onDecreaseBreakLength() {
    this.setState((prevState) => {
      return {
        breakDuration: prevState.breakDuration - 1,
        timerMinute: prevState.breakDuration - 1,
      };
    });
  }

  onIncreaseFocusLength() {
    this.setState((prevState) => {
      return {
        focusDuration: prevState.focusDuration + 1,
        timerMinute: prevState.focusDuration + 1,
      };
    });
  }

  onDecreaseFocusLength() {
    this.setState((prevState) => {
      return {
        focusDuration: prevState.focusDuration - 1,
        timerMinute: prevState.focusDuration - 1,
      };
    });
  }

  onToggleInterval(isSession) {
    if (isSession) {
      this.setState({
        timerMinute: this.state.focusDuration,
      });
    } else {
      this.setState({
        timerMinute: this.state.breakDuration,
      });
    }
  }

  onUpdateTimerMinute() {
    this.setState((prevState) => {
      return {
        timerMinute: prevState.timerMinute - 1,
      };
    });
  }

  render() {
    return (
      <div className="App">
        <Header
          breakDuration={this.state.breakDuration}
          focusDuration={this.state.focusDuration}
          increaseBreak={this.onIncreaseBreakLength}
          decreaseBreak={this.onDecreaseBreakLength}
          increaseFocus={this.onIncreaseFocusLength}
          decreaseFocus={this.onDecreaseFocusLength}
        />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/timer">
            <Timer
              timerMinute={this.state.timerMinute}
              updateTimerMinute={this.onUpdateTimerMinute}
              toggleInterval={this.onToggleInterval}
            />
          </Route>
          <Route path="/breath">
            <Timer
              timerMinute={this.state.timerMinute}
              breakTimer={this.state.breakDuration}
              updateTimerMinute={this.onUpdateTimerMinute}
              toggleInterval={this.onToggleInterval}
            />
          </Route>
          <Route path="/break">
            <ChoicePage />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
