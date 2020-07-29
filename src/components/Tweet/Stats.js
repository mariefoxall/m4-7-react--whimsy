import React, { useContext } from "react";
import styled from "styled-components";

import { TweetContext } from "../TweetContext";

const Stats = () => {
  const { numOfLikes, numOfRetweets } = React.useContext(TweetContext);
  return (
    <StatsDiv>
      <Stat>
        <strong>{numOfRetweets} </strong> Retweets
      </Stat>
      <Stat>
        <strong> {numOfLikes} </strong> Likes
      </Stat>
    </StatsDiv>
  );
};

const Stat = styled.div`
  margin-right: 20px;
`;
const StatsDiv = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
`;

export default Stats;
