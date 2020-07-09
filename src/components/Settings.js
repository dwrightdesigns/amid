import React from "react";
import "../App.scss";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Settings = ({ open, ...props }) => {

  function decreaseCounter() {
    if (props.breakDuration === 1) {
      return;
    }
    props.decreaseBreak();
  }

  function increaseCounter() {
    if (props.breakDuration === 180) {
      return;
    }
    props.increaseBreak();
  }

  function decreaseFocus() {
    if (props.focusDuration === 1) {
      return;
    }
    props.decreaseFocus();
  }

  function increaseFocus() {
    if (props.focusDuration === 180) {
      return;
    }
    props.increaseFocus();
  }
  return (
    <StyledWrapper open={open}>
      <StyledDuration>
        <div className="left">
          <h5>Break Duration</h5>
          <StyledTime>
            <div className="duration">
              <button onClick={decreaseCounter}>
                <i class="fas fa-caret-down"></i>
              </button>
              <h4>{props.breakDuration}</h4>
              <button onClick={increaseCounter}>
                <i class="fas fa-caret-up"></i>
              </button>
            </div>
            <p>minutes</p>
          </StyledTime>
        </div>
        <div className="right">
          <h5>Focus Duration</h5>
          <StyledTime>
            <div className="duration">
              <button onClick={decreaseFocus}>
                <i class="fas fa-caret-down"></i>
              </button>
              <h4>{props.focusDuration}</h4>
              <button onClick={increaseFocus}>
                <i class="fas fa-caret-up"></i>
              </button>
            </div>
            <p>minutes</p>
          </StyledTime>
        </div>
      </StyledDuration>
      <StyledToggle>
        <h5>Auto Start Break</h5>
        <StyledLabel>
          <div className="toggle">
            <input type="checkbox" className="checkbox" />
            <div className="knobs"></div>
            <div className="layer"></div>
          </div>
        </StyledLabel>
      </StyledToggle>
      <StyledToggle>
        <h5>Play Chime When Timer Ends</h5>
        <StyledLabel>
          <div className="toggle">
            <input type="checkbox" className="checkbox" />
            <div className="knobs"></div>
            <div className="layer"></div>
          </div>
        </StyledLabel>
      </StyledToggle>
      <StyledButtons>
        <div className="left">
          <Link to="/" className="dark-btn button btn">
            <i class="fas fa-question"></i>
            <h5>how to use</h5>
          </Link>
        </div>
        <div className="right">
          <Link to="/about" className="dark-btn button btn">
            <i class="fas fa-info"></i>
            <h5>about</h5>
          </Link>
        </div>
      </StyledButtons>
      <cite>made by team amid</cite>
    </StyledWrapper>
  );
};

const StyledLabel = styled.label`
    margin: .5rem;
    border-radius: 4px;
    
.toggle {
    position: relative;
    top: 50%;
    width: 51px;
    height: 31px;
    overflow: hidden;
    border-radius: 100px;
    background-color: var(--light-color);

    .checkbox {
        position: relative;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        cursor: pointer;
        z-index: 3;
        
        &:checked + .knobs:before {
            left: -28px;
        }

        &:checked + .knobs:after {
            right: 4px;
        }

        &:checked ~ .layer {
            background-color: var(--dark-color);
        }
    }

    .knobs {
        z-index: 2;

        &:before, &:after {
            content: '';
            position: absolute;
            top: 4px;
            left: 4px;
            width: 15px;
            height: 5px;
            font-size: 10px;
            font-weight: bold;
            text-align: center;
            line-height: 1;
            padding: 9px 4px;
            background-color: var(--toggleOff-color);
            border-radius: 50%;
            transition: 0.3s ease all;
        }

        &:before {
            content: "";
        }
        
        &:after {
            content: "";
            right: -28px;
            left: auto;
            background-color: var(--toggleOn-color);
        }

    .layer {
        width: 100%;
        background-color: #ebf7fc;
        transition: 0.3s ease all;
        z-index: 1;
    }
}  
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

  cite {
    margin: 0.5rem;
  }
`;

const StyledDuration = styled.section`
  display: flex;
  width: 100%;
  max-width: 400px;
  justify-content: center;
  text-align: center;

  h5 {
    font-size: 0.8rem;
  }

  .left {
    margin: 0 0.5rem 0 0;
    width: 100%;
  }
  .right {
    margin: 0 0 0 0.5rem;
    width: 100%;
  }
`;

const StyledTime = styled.div`
  background-color: var(--dark-color);
  margin: 0.5rem auto;
  padding: 0.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;

  .duration {
    display: flex;
    align-items: center;
    justify-content: center;

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

const StyledToggle = styled.section`
  background-color: var(--dark-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  color: var(--light-color);
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  margin: 0.5rem 1rem;
  padding: 0.5rem;

  h5 {
    font-size: 0.8rem;
    margin: 0 0 0 0.5rem;
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
