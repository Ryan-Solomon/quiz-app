import React from 'react';
import { useFetchQuiz } from './hooks/hooks';

type TProps = {
  amount: number;
  category: number;
  difficulty: string;
};

export default function QuizTrivia({ amount, category, difficulty }: TProps) {
  const { quizData, status } = useFetchQuiz({ amount, category, difficulty });
  return <div>{quizData[0].question}</div>;
}
