import React from "react";
import styled from "styled-components";

import LikeButton from "../LikeButton";
import Action from "./Action";
import TweetActionIcon from "./TweetActionIcon";
import { TweetContext } from "../TweetContext";
import ScaleIn from "../LikeButton/ScaleIn";

import PoppingCircle from "../LikeButton/PoppingCircle";

const ActionBar = ({ size = 40 }) => {
  const {
    isRetweeted,
    isLiked,
    handleToggleLike,
    handleToggleRetweet,
  } = React.useContext(TweetContext);
  return (
    <Wrapper>
      <Action color="rgb(27, 149, 224)" size={40}>
        <TweetActionIcon kind="reply" />
      </Action>
      <Action onClick={handleToggleRetweet} color="rgb(23, 191, 99)" size={40}>
        <Background>
          {isRetweeted && (
            <PoppingCircle size={size} color="rgb(23, 191, 99)" />
          )}
        </Background>
        {isRetweeted ? (
          <ScaleIn>
            <TweetActionIcon
              kind="retweet"
              color={isRetweeted ? "rgb(23, 191, 99)" : undefined}
            />
          </ScaleIn>
        ) : (
          <TweetActionIcon
            kind="retweet"
            color={isRetweeted ? "rgb(23, 191, 99)" : undefined}
          />
        )}
      </Action>
      <Action onClick={handleToggleLike} color="rgb(224, 36, 94)" size={40}>
        <LikeButton />
      </Action>
      <Action color="rgb(27, 149, 224)" size={40}>
        <TweetActionIcon kind="share" />
      </Action>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 48px;
`;
const Background = styled.div`
  z-index: 0;
  position: absolute;
`;

export default ActionBar;
