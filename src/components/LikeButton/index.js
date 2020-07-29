import React from "react";
import styled from "styled-components";

import { TweetContext } from "../TweetContext";

import Heart from "./Heart";
import PoppingCircle from "./PoppingCircle";
import ScaleIn from "./ScaleIn";

const PARTICLE_COLORS = ["#e53935", "#1e88e5", "#43a047", "#fdd835", "#fb8c00"];

const LikeButton = ({ size = 40 }) => {
  const { isLiked } = React.useContext(TweetContext);
  const heartSize = size * 0.6;

  return (
    <Wrapper style={{ width: size, height: size }}>
      <Foreground>
        {isLiked ? (
          <ScaleIn>
            <Heart width={heartSize} isToggled={isLiked} />
          </ScaleIn>
        ) : (
          <Heart width={heartSize} isToggled={isLiked} />
        )}
      </Foreground>
      <Background>
        {isLiked && <PoppingCircle size={size} color="#E790F7" />}
      </Background>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Foreground = styled.div`
  z-index: 1;
  position: relative;
`;

const Background = styled.div`
  z-index: 0;
  position: absolute;
`;

export default LikeButton;
