import React from "react";

interface ScoresProps {
  score: number;
}

const Scores = ({ score }: ScoresProps) => {
  return <div data-testid="scores-component">Your Score is {score}!</div>;
};

export default Scores;
