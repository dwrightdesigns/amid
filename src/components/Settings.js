import React, { Component } from "react";
import "../App.scss";
import styled from "styled-components";

const StyledLabel = styled.label`
    height: ;
    margin: 1rem;
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
  width: 100%;
  height: 90vh;
  align-items: center;
  justify-content: center;
  background-color: var(--landing-bg);

  cite {
      margin: 1rem;
  }
`;

const StyledDuration = styled.section`
  display: flex;
  text-align: center;
`;

const StyledTime = styled.div`
  background-color: var(--dark-color);
  width: 190px;
  margin: 0.5rem 10px;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;

  input {
    height: 46px;
    width: 90px;
    font-size: 2rem;
    text-align: center;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    opacity: 1;
  }

  p {
    margin: 0.5rem 0 0 0;
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
  width: 400px;
  margin: 0.5rem;

  h5 {
    margin: 0 0 0 1rem;
  }
`;

const StyledButtons = styled.section`
  color: var(--light-color);
  display: flex;
  
  .btn {
    margin: .5rem 10px;
    width: 190px;
    height: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;

    i {
        font-size: 2rem;
    }
  }
`;

class Settings extends Component {
  render() {
    return (
      <StyledWrapper>
        <StyledDuration>
          <div>
            <h5>Break Duration</h5>
            <StyledTime className="time-input">
              <input type="number" />
              <p>minutes</p>
            </StyledTime>
          </div>
          <div>
            <h5>Focus Duration</h5>
            <StyledTime className="time-input">
              <input type="number" />
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
          <div className="dark-btn button btn">
            <i class="fas fa-question"></i>
            <h5>how to use</h5>
          </div>
          <div className="dark-btn button btn">
            <i class="fas fa-info"></i>
            <h5>about</h5>
          </div>
        </StyledButtons>
        <cite>made by team amid</cite>
      </StyledWrapper>
    );
  }
}

export default Settings;
