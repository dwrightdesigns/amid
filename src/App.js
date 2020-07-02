import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ChoicePage from "./components/breakChoice/ChoicePage";

function App() {
  return (
    <div className="App">
      <ChoicePage />
    </div>
  );
}

export default App;
