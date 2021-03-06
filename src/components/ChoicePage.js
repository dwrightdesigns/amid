import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  text-align: center;
  `;

function ChoicePage(props) {
  const handleChangeTimer = (activity) => {
    props.onChangeTimer(activity);
  };
  return (
    <PageWrapper>
      <Title>How would you like to spend your break?</Title>
      <Link
        className="gradient-btn button"
        to="/timer"
        onClick={() => {
          handleChangeTimer("unstructured");
        }}
      >
        Unstructured Break
      </Link>
      <Link
        className="gradient-btn button"
        to="/timer"
        onClick={() => {
          handleChangeTimer("breathing");
        }}
      >
        Breathing Exercise
      </Link>
      <cite>© made by team amid</cite>
    </PageWrapper>
  );
}

export default ChoicePage;
