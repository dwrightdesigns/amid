import React from "react";
import styled from "styled-components";

const SkipButtonStyle = styled.button`

    display: inline-block;
    border: none;
    padding: .5rem .5rem;
    margin: 0;
    text-decoration: none;
    background: $light-color;
    color: $dark-color;
    font-family: sans-serif;
    font-size: 1.0625rem;
    font-weight: 400;
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, 
    transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
    
    &:hover {
        background: $dark-color;
        color: $light-color;
    }

`;

function SkipButton() {
      return (
        <div>
          <SkipButtonStyle>Switch To Focus <i class="fas fa-step-forward"></i> </SkipButtonStyle>
        </div>
      )
      }


  export default SkipButton;