import React from "react";
import styled from "styled-components";

const CardFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 125px;
  background: linear-gradient(135.22deg, #91b6bc 9.26%, #86eb9c 100.48%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  margin: 12px;
  :hover {
    width: 304px;
    height: 129px;
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
  }
`;

function ChoiceCard() {
  return (
    <CardFrame>
      <h4>Unstructured Break</h4>
    </CardFrame>
  );
}

export default ChoiceCard;
