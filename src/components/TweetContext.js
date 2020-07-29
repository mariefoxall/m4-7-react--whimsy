import React from "react";

import avatar from "../assets/carmen-sandiego.png";

export const TweetContext = React.createContext();

export const TweetProvider = ({ children }) => {
  const [tweetContents, setTweetContents] = React.useState(
    "Where in the world am I?"
  );
  const [displayName, setDisplayName] = React.useState("Carmen Sandiego");
  const [username, setUsername] = React.useState("carmen-sandiego");
  const avatarSrc = avatar;

  const [
    isRetweetedByCurrentUser,
    SetIsRetweetedByCurrentUser,
  ] = React.useState(false);

  const [isLikedByCurrentUser, SetIsLikedByCurrentUser] = React.useState(false);

  return (
    <TweetContext.Provider
      value={{
        tweetContents,
        displayName,
        username,
        avatarSrc,
        isRetweetedByCurrentUser,
        isLikedByCurrentUser,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};
