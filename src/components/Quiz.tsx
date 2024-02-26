import React, { useEffect, useState } from "react";
import quizData from "../quizData.json";
import Question from "./Question";
import Scores from "./Scores";
import "../App.css";

export type TQuestion = {
  id: number;
  title: string;
  answers: number[];
  correctAnswer: number;
  selectedAnswer?: number;
};

const Quiz = () => {
  const [questions, setQuestions] = useState<TQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [viewScoresPage, setViewScoresPage] = useState(false);

  useEffect(() => {
    const stateQuestions = quizData.map((question) => ({
      ...question,
      selectedAnswer: 0,
    }));
    setQuestions(stateQuestions);
  }, []);

  const onClickNext = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const onClickPrevious = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const updateAnswerValue = (questionId: number, answerId: number) => {
    const updatedQuestions = [...questions];
    const updatedQuestionIndex = questions.findIndex(
      (question) => question.id === questionId
    );
    if (updatedQuestionIndex !== -1) {
      updatedQuestions[updatedQuestionIndex].selectedAnswer = answerId;
    }
    setQuestions(updatedQuestions);
  };

  const onClickSubmit = () => {
    setViewScoresPage(true);
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((question) => {
      if (question.correctAnswer === question.selectedAnswer) {
        score += 100 / questions.length;
      }
    });
    return score;
  };

  const renderContent = () => {
    if (viewScoresPage) {
      return <Scores score={calculateScore()} />;
    }
    if (questions.length > 0) {
      return (
        <Question
          question={questions[currentQuestion]}
          onClickNext={onClickNext}
          onClickPrevious={onClickPrevious}
          updateAnswerValue={updateAnswerValue}
          onClickSubmit={onClickSubmit}
        />
      );
    }
    return null;
  };

  return (
    <div className="container" data-testid="quiz-component">
      {renderContent()}
    </div>
  );
};

export default Quiz;
