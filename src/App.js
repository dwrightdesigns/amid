import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header";
import Timer from "./components/timer/Timer";
import Landing from "./components/LandingPage";
import ChoicePage from "./components/breakChoice/ChoicePage";
// import Settings from "./components/Settings";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      settingsActive: false,
    };
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/timer">
            <Timer />
          </Route>
          <Route path="/breath">
            <Timer />
          </Route>
          {/* <Route path="/settings">
            <Settings />
          </Route> */}
          <Route to="/break">
            <ChoicePage />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
