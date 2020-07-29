import React from "react";
import styled, { keyframes } from "styled-components";

const PoppingCircle = ({ size, color }) => {
  return (
    <Wrapper
      style={{ width: size, height: size, backgroundColor: color }}
    ></Wrapper>
  );
};

const scale = keyframes`
from{
    transform: scale(0.2)
}
to{
    transform: scale(1)
}`;

const disappear = keyframes`
from{
    opacity: 1
} to{
    opacity 0
}`;

const Wrapper = styled.div`
  border-radius: 50%;
  animation: ${scale} 500ms forwards, ${disappear} 1000ms forwards;
  margin: 0;
  padding: 0;
  top: 0px;
  left: 0px;
`;

export default PoppingCircle;
