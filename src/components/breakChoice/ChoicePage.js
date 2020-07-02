import React from "react";
import styled from "styled-components";
import ChoiceCard from "./ChoiceCard.js";

const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f2f2f2;
`;

function ChoicePage() {
  return (
    <PageWrapper>
      <p>How would you like to spend your break?</p>
      <ChoiceCard />
      <ChoiceCard />
    </PageWrapper>
  );
}

export default ChoicePage;
