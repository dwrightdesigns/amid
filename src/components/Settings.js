import React, { Component } from "react";
import "../App.scss";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import * as timerStates from "../timerStates";

class Settings extends Component {
  constructor(props) {
    super(props);

    this.handleFocusChange = this.handleFocusChange.bind(this);
    this.handleBreakChange = this.handleBreakChange.bind(this);
  }

  handleFocusChange(e) {
    const newFocusSet = this.props.focusSet;

    if (e.target.id === "hours")
      newFocusSet
        .subtract(newFocusSet.get("hours"), "hours")
        .add(parseInt(e.target.value, 10), "hours");

    if (e.target.id === "minutes")
      newFocusSet
        .subtract(newFocusSet.get("minutes"), "minutes")
        .add(parseInt(e.target.value, 10), "minutes");

    if (e.target.id === "seconds")
      newFocusSet
        .subtract(newFocusSet.get("seconds"), "seconds")
        .add(parseInt(e.target.value, 10), "seconds");

    this.props.setFocusSet(newFocusSet);
  }

  handleBreakChange(e) {
    const newBreakSet = this.props.breakSet;

    if (e.target.id === "hours")
      newBreakSet
        .subtract(newBreakSet.get("hours"), "hours")
        .add(parseInt(e.target.value, 10), "hours");

    if (e.target.id === "minutes")
      newBreakSet
        .subtract(newBreakSet.get("minutes"), "minutes")
        .add(parseInt(e.target.value, 10), "minutes");

    if (e.target.id === "seconds")
      newBreakSet
        .subtract(newBreakSet.get("seconds"), "seconds")
        .add(parseInt(e.target.value, 10), "seconds");

    this.props.setBreakSet(newBreakSet);
  }

  navigate(e, path) {
    e.preventDefault();
    this.props.setOpen();
    this.props.history.push(path);
  }

  render() {
    return (
      <StyledWrapper open={this.props.open}>
        {this.props.timerState !== timerStates.RUNNING && (
          <StyledDuration>
            <div>
              <h5>Break Duration</h5>
              <StyledTime>
                <div className="duration">
                  <input
                    id="hours"
                    type="number"
                    onChange={this.handleBreakChange}
                    defaultValue={this.props.breakSet.get(`hours`)}
                  />
                  <p>hours</p>
                </div>
                <div className="duration">
                  <input
                    id="minutes"
                    type="number"
                    onChange={this.handleBreakChange}
                    defaultValue={this.props.breakSet.get(`minutes`)}
                  />
                  <p>minutes</p>
                </div>
                <div className="duration">
                  <input
                    id="seconds"
                    type="number"
                    onChange={this.handleBreakChange}
                    defaultValue={this.props.breakSet.get(`seconds`)}
                  />
                  <p>seconds</p>
                </div>
              </StyledTime>
            </div>
            <div>
              <h5>Focus Duration</h5>
              <StyledTime>
                <div className="duration">
                  <input
                    id="hours"
                    type="number"
                    onChange={this.handleFocusChange}
                    defaultValue={this.props.focusSet.get("hours")}
                  />
                  <p>hours</p>
                </div>
                <div className="duration">
                  <input
                    id="minutes"
                    type="number"
                    onChange={this.handleFocusChange}
                    defaultValue={this.props.focusSet.get("minutes")}
                  />
                  <p>minutes</p>
                </div>
                <div className="duration">
                  <input
                    id="seconds"
                    type="number"
                    onChange={this.handleFocusChange}
                    defaultValue={this.props.focusSet.get("seconds")}
                  />
                  <p>seconds</p>
                </div>
              </StyledTime>
            </div>
          </StyledDuration>
        )}
        <StyledButtons>
          <div className="left">
            <a
              href="#"
              onClick={(e) => this.navigate(e, "/")}
              className="dark-btn button btn"
            >
              <i className="fas fa-question"></i>
              <h5>how to use</h5>
            </a>
          </div>
          <div className="right">
            <a
              href="#"
              onClick={(e) => this.navigate(e, "/about")}
              className="dark-btn button btn"
            >
              <i className="fas fa-info"></i>
              <h5>about</h5>
            </a>
          </div>
        </StyledButtons>
        <StyledSave
          className="gradient-btn button"
          open={this.props.open}
          onClick={() => this.props.setOpen(!this.props.open)}
        >
          <h5>Save</h5>
        </StyledSave>
        <cite>© made by team amid</cite>
      </StyledWrapper>
    );
  }
}

const StyledSave = styled.button`
  border: none;
  cursor: pointer;
  width: 100%;
  max-width: 400px;
  height: 60px;
  outline: none;
  margin: 1rem 0 0 0;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding: 1rem;
  transform-origin: top;
  transition: transform 0.5s ease-in-out;
  transform: ${({ open }) => (open ? "scale(1)" : "scale(0)")};
  height: 90vh;
  align-items: center;
  justify-content: center;
  background-color: var(--settings-bg);
  z-index: 988;
  position: fixed;
  top: 10vh;
  backdrop-filter: blur(5px);
`;

const StyledDuration = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  justify-content: center;
  text-align: center;

  h5 {
    font-size: 0.8rem;
  }
`;

const StyledTime = styled.div`
  background-color: var(--dark-color);
  margin: 0.5rem auto;
  padding: 0.5rem 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: 100%;

  .duration {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;

    h4 {
      color: var(--light-color);
    }

    button {
      padding: 5px;
      margin: 0 12px;
      height: 25px;
      background-color: var(l--light-color);
      border: none;
      outline: none;
      color: var(--dark-color);
      cursor: pointer;

      &:hover {
        transform: scale(1.1);
      }
    }

    p {
      margin: 0 1rem 0 1rem;
    }
  }

  input {
    height: 46px;
    width: 80px;
    font-size: 2rem;
    text-align: center;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    opacity: 1;
  }

  p {
    margin: 0.5rem 0 0 0;
    font-size: 0.8rem;
    color: var(--light-color);
  }
`;

const StyledButtons = styled.section`
  color: var(--light-color);
  display: flex;
  width: 100%;
  max-width: 400px;

  div {
    width: 100%;
    margin: 0.5rem;
  }

  .btn {
    margin: 0.5rem 0 0 0;
    width: 100%;
    height: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;

    h5 {
      font-size: 0.8rem;
    }

    i {
      font-size: 1.5rem;
    }
  }

  .left {
    margin: 0 0.5rem 0 0;
  }
  .right {
    margin: 0 0 0 0.5rem;
  }
`;

export default withRouter(Settings);
