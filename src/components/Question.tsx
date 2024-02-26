import React from "react";
import { TQuestion } from "./Quiz";
import { Card, Radio, Space, Button } from "antd";
import type { RadioChangeEvent } from "antd";
import answers from "../answersData.json";

interface QuestionProps {
  question: TQuestion;
  onClickNext: () => void;
  onClickPrevious: () => void;
  updateAnswerValue: (questionId: number, answerId: number) => void;
  onClickSubmit: () => void;
}

const Question = ({
  question,
  onClickNext,
  onClickPrevious,
  updateAnswerValue,
  onClickSubmit,
}: QuestionProps) => {
  const onChange = (e: RadioChangeEvent) => {
    updateAnswerValue(question.id, e.target.value);
  };
  return (
    <Card
      data-testid={`question-component${question.id}`}
      title={question.title}
      style={{ width: 700 }}
      actions={[
        question.id !== 1 && (
          <Button onClick={onClickPrevious} data-testid="previous-button">
            Previous
          </Button>
        ),
        question.id === 5 ? (
          <Button
            type="primary"
            onClick={onClickSubmit}
            disabled={question.selectedAnswer === 0}
            data-testid="submit-button"
          >
            Submit
          </Button>
        ) : (
          <Button
            type="primary"
            onClick={onClickNext}
            disabled={question.selectedAnswer === 0}
            data-testid="next-button"
          >
            Next
          </Button>
        ),
      ]}
    >
      <Radio.Group onChange={onChange} value={question?.selectedAnswer || 0}>
        <Space direction="vertical">
          {question.answers.map((answerId) => {
            const answer = answers.find((ans) => ans.id === answerId);
            return (
              <Radio
                key={answerId}
                value={answerId}
                data-testid={`answer-component${answerId}`}
              >
                {answer ? answer.title : ""}
              </Radio>
            );
          })}
        </Space>
      </Radio.Group>
    </Card>
  );
};

export default Question;
