import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ButtonContainer = styled.div`
  margin: 0 0 2rem 0;
`;

const CardFrame = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 202px;
  height: 202px;
  background: rgba(229, 229, 229, 0.5);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  border: 4px solid var(--light-color);

  &:hover {
  }
`;

const BreatheVariant = {
  hidden: {
    scale: 1,
  },
  visible: {
    scale: [1, 0.6, 1],
    opacity: [1, 0.5, 1],
    transition: {
      duration: 16,
      times: [0, 0.3, 1],
      loop: Infinity,
    },
  },
};

function BreathExCard() {
  return (
    <div>
      <ButtonContainer>
        <CardFrame
          variants={BreatheVariant}
          initial="hidden"
          animate="visible"
        ></CardFrame>
      </ButtonContainer>
    </div>
  );
}

export default BreathExCard;
