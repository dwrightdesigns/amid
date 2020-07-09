import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const CardFrame = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background: linear-gradient(135.22deg, #91b6bc 9.26%, #86eb9c 100.48%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  margin: 12px;
`;

const Instructions = styled.h4``;

const BreatheVariant = {
  hidden: {
    scale: 1
  },
  visible: {
    scale: [1, .6, 1],
    transition: {
      duration: 16,
      times: [0, .3, 1],
      loop: Infinity,
    }
  }
}

function BreathExCard() {

  return (
    <div>
    <CardFrame 
    variants={BreatheVariant}
    initial="hidden"
    animate="visible">
      <Instructions>Breathe In..</Instructions>
      </CardFrame>
    
    
    </div>
  );
}

export default BreathExCard;
