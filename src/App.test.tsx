import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders quiz component", () => {
  render(<App />);
  const quiz = screen.getByTestId("quiz-component");
  expect(quiz).toBeInTheDocument();
});

test("renders first question, next should be disabled until an answer is selected", () => {
  render(<App />);
  const question = screen.getByTestId("question-component1");
  expect(question).toBeInTheDocument();
  const nextButton = screen.getByTestId("next-button");
  expect(nextButton).toBeDisabled();
  const firstAnswer = screen.getByTestId("answer-component1");
  fireEvent.click(firstAnswer);
  expect(nextButton).not.toBeDisabled();
});

test("renders scores page when quiz is submitted", () => {
  render(<App />);
  // click first answer of every question
  for (let index = 1; index < 20; index += 4) {
    const firstAnswer = screen.getByTestId(`answer-component${index}`);
    fireEvent.click(firstAnswer);
    // if it's the last question, submit
    if (index === 17) {
      const submitButton = screen.getByTestId("submit-button");
      fireEvent.click(submitButton);
    } else {
      const nextButton = screen.getByTestId("next-button");
      fireEvent.click(nextButton);
    }
  }
  const scores = screen.getByTestId("scores-component");
  expect(scores).toBeInTheDocument();
});

test("navigates to the previous question when previous button is clicked, answer is still checked", () => {
  render(<App />);
  const firstAnswer = screen.getByTestId("answer-component1");
  fireEvent.click(firstAnswer);
  const nextButton = screen.getByTestId("next-button");
  fireEvent.click(nextButton);
  const previousButton = screen.getByTestId("previous-button");
  fireEvent.click(previousButton);
  const previousQuestion = screen.getByTestId("question-component1");
  expect(screen.getByTestId("answer-component1").closest("span")).toHaveClass(
    "ant-radio-checked"
  );
  expect(previousQuestion).toBeInTheDocument();
});
