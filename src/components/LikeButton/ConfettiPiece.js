import React from "react";

import styled from "styled-components";

import Particle from "./Particle";

const ConfettiPiece = ({ angle, distance }) => {
  return (
    <CenteredInsideParent>
      <Particle angle={angle} distance={distance}>
        <Circle></Circle>
      </Particle>
    </CenteredInsideParent>
  );
};

const Circle = styled.div`
  background-color: red;
  border-radius: 50%;
  height: 10px;
  width: 10px;
  position: absolute;
  margin: auto;
`;

const CenteredInsideParent = styled.div`
  position: absolute;
  margin: auto;
  left: 15px;
  top: 15px;
`;

export default ConfettiPiece;
