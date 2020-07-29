import React from "react";

import moment from "moment";

import avatar from "../assets/carmen-sandiego.png";

export const TweetContext = React.createContext();

export const TweetProvider = ({ children }) => {
  const tweetContents = "Where in the world am I?";
  const displayName = "Carmen Sandiego";
  const username = "carmen-sandiego";
  const avatarSrc = avatar;

  const isRetweetedByCurrentUser = false;

  const isLikedByCurrentUser = false;
  const date = moment().format("h:mm a - MMMM Do, YYYY");

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
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};
