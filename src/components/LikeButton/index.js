import React from "react";
import styled from "styled-components";

import { TweetContext } from "../TweetContext";

import Heart from "./Heart";

const PARTICLE_COLORS = ["#e53935", "#1e88e5", "#43a047", "#fdd835", "#fb8c00"];

const LikeButton = ({ size = 40 }) => {
  const { isLiked, handleToggleLike } = React.useContext(TweetContext);
  const heartSize = size * 0.6;

  return (
    <Wrapper
      onClick={() => {
        console.log("before handle function");
        handleToggleLike();
        console.log("after handle function");
      }}
      style={{ width: size, height: size }}
    >
      <Heart width={heartSize} isToggled={isLiked} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default LikeButton;
