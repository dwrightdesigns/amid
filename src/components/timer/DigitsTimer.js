import React from "react";
import styled from "styled-components";

const DigitsOnTimer = styled.h1`
margin-top: 7rem;
margin-bottom: 3rem;
color: var(--dark-color);`;

function DigitsTimer() {
      return (
        <div>
          <DigitsOnTimer>10:00</DigitsOnTimer>
        </div>
      )
      }


  export default DigitsTimer;