import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  color: var(--dark-color);
  font-size: 1rem;
  img {
    width: 130px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <i class="fas fa-cog"></i>
      <div>
        <img src="/logo512.png" alt="amid logo" />
      </div>
    </StyledHeader>
  );
}

export default Header;
