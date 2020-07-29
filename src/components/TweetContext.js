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

  const handleToggleLike = () => {
    console.log("like button clicked");
    let newIsLiked = !isLiked;
    setIsLiked(newIsLiked);
    setNumOfLikes(newIsLiked ? numOfLikes + 1 : numOfLikes - 1);
  };

  const handleToggleRetweet = () => {
    console.log("retweet button clicked");
    let newIsRetweeted = !isRetweeted;
    setIsRetweeted(newIsRetweeted);
    setNumOfRetweets(newIsRetweeted ? numOfRetweets + 1 : numOfRetweets - 1);
  };

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
        isLiked,
        handleToggleLike,
        handleToggleRetweet,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};
