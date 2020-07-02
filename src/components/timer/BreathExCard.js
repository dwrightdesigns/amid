import React from "react";
import styled from "styled-components";

const CardFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 200px;
  background: linear-gradient(135.22deg, #91b6bc 9.26%, #86eb9c 100.48%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  margin: 12px;
`;

const Instructions = styled.h4``;

function BreathExCard() {
  return (
    <CardFrame>
      <Instructions>Breathe In...</Instructions>
    </CardFrame>
  );
}

export default BreathExCard;
