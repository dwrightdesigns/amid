import React from "react";
import styled from "styled-components";

const SkipButtonStyle = styled.button`

    display: inline-block;
    border: none;
    padding: .5rem .5rem;
    text-decoration: none;
    background: var(--light-color);
    color: var(--dark-color);
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
    outline: none;
    
    &:hover {
        background: var(--dark-color);
        color: var(--light-color);
    }

`;

function SkipButton(props) {
      return (
        <div>
          <SkipButtonStyle onClick={props.onClick}>{props.isSession ? "Switch to Focus" : "Switch to Break"}<i class="fas fa-step-forward"></i> </SkipButtonStyle>
        </div>
      )
      }


  export default SkipButton;