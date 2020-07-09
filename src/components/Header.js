import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Settings from "./Settings";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  height: 10vh;
  width: 100%;
  position: fixed;
  justify-content: space-between;
  background-color: var(--landing-bg);
  z-index: 999;

  .settings {
    font-size: 1.3rem;
    color: var(--dark-color);
    margin: 0 0 0 1rem;
    cursor: pointer;
  }
  .settings-container {
    margin: 0 1rem 0 0;
  }

  .logo-container {
    margin: 0 1rem 0 0;
    .logo {
      width: 70px;
      @media screen and (min-width: 375px) and (orientation: portrait) {
        width: 130px;
      }
      @media screen and (min-width: 768px) {
        width: 130px;
      }
    }
  }
`;

const Header = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledHeader>
        <div className="settings-container">
          <div className="settings" open={open} onClick={() => setOpen(!open)}>
            <i className={`fas ${open ? "fa-times" : "fa-cog"}`}></i>
          </div>
        </div>
        <div className="logo-container">
          <a href="/">
            <img className="logo" src="/logo512.png" alt="amid logo" />
          </a>
        </div>
      </StyledHeader>
      <Settings
        open={open}
        setOpen={() => setOpen(false)}
        breakDuration={props.breakDuration}
        focusDuration={props.focusDuration}
        increaseBreak={props.increaseBreak}
        decreaseBreak={props.decreaseBreak}
        increaseFocus={props.increaseFocus}
        decreaseFocus={props.decreaseFocus}
      />
    </>
  );
};

export default Header;
