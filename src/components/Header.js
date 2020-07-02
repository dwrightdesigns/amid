import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  width: 100%;
  background-color: var(--landing-bg);

  i {
    font-size: 1.3rem;
    color: var(--dark-color);
  }

  div {
    margin: auto;
    img {
      width: 130px;
    }
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Link to="/settings"><i class="fas fa-cog"></i></Link>
      <div>
        <a href="/"><img src="/logo512.png" alt="amid logo" /></a> 
      </div>
    </StyledHeader>
  );
}

export default Header;
