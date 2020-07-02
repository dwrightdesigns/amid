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

const Title = styled.p`
  color: linear-gradient(0deg, #1b1b1b, #1b1b1b), url(amidcopy.png);
  opacity: 0.6;
  margin: 12px;
`;

const Cite = styled.cite`
  position: absolute;

  bottom: 64px;
  color: linear-gradient(0deg, #1b1b1b, #1b1b1b), url(amidcopy.png);
`;

function ChoicePage() {
  return (
    <PageWrapper>
      <Title>How would you like to spend your break?</Title>
      <ChoiceCard />
      <ChoiceCard />
      <Cite>© 2020 amid</Cite>
    </PageWrapper>
  );
}

export default ChoicePage;
