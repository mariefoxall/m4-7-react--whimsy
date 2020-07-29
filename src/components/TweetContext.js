import React from "react";

import moment from "moment";

import avatar from "../assets/carmen-sandiego.png";

export const TweetContext = React.createContext();

export const TweetProvider = ({ children }) => {
  const tweetContents = "Where in the world am I?";
  const displayName = "Carmen Sandiego";
  const username = "carmen-sandiego";
  const avatarSrc = avatar;

  const isRetweetedByCurrentUser = isRetweeted;
  const isLikedByCurrentUser = isLiked;

  const date = moment().format("h:mm a - MMMM Do, YYYY");

  const [numOfLikes, setNumOfLikes] = React.useState(460);
  const [numOfRetweets, setNumOfRetweets] = React.useState(65);
  const [isLiked, setIsLiked] = React.useState(false);
  const [isRetweeted, setIsRetweeted] = React.useState(false);

  return (
    <TweetContext.Provider
      value={{
        tweetContents,
        displayName,
        username,
        avatarSrc,
        isRetweetedByCurrentUser,
        isLikedByCurrentUser,
        date,
        numOfLikes,
        numOfRetweets,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};
