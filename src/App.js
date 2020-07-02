import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header";
import Timer from "./components/timer/Timer";
import Landing from "./components/LandingPage";

function App() {
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
      </Switch>
    </div>
  );
}

export default App;
