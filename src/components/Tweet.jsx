import React from "react";
import { Container } from "react-bootstrap";
import TweetEmbed from "react-tweet-embed";
import { useQuery } from "react-query";
import { getFeed } from "../apis/API";
import "../App.css";

const Feed = () => {
  const { data, isLoading, isError, error } = useQuery("feed", getFeed);

  if (data) {
    console.log("feed", data.data);
  }

  return (
    <Container>
      <div className="tweet-container">
        {data &&
          data.data.map((tweet, i) => {
            return (
              <div className="tweet">
                <TweetEmbed
                  id={tweet.id}
                  options={{ width: "260", theme: "dark" }}
                />
              </div>
            );
          })}
      </div>
    </Container>
  );
};

export default Feed;
