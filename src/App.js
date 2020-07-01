import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Timer from "./components/timer/Timer";

function App() {
  return (
    <div className="App">
      <h1>Hello Team AMID!</h1>
      <Timer />
    </div>
  );
}

export default App;
