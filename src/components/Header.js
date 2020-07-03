import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  // padding: 1.5rem;
  height: 10vh;
  width: 100%;
  justify-content: space-between;
  background-color: var(--landing-bg);

  .settings {
    font-size: 1.3rem;
    color: var(--dark-color);
    margin: 0 0 0 1rem;
    @media screen and (min-width: 768px) {
      position: absolute;
    }
  }

  div {
    margin: 0 1rem 0 0;
    @media screen and (min-width: 768px) {
      margin: auto;
    }
    img {
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

function Header() {
  return (
    <StyledHeader>
      <Link className="settings" to="/settings">
        <i className="fas fa-cog"></i>
      </Link>
      <div>
        <a href="/">
          <img src="/logo512.png" alt="amid logo" />
        </a>
      </div>
    </StyledHeader>
  );
}

export default Header;
