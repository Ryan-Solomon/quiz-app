import { useEffect, useState } from 'react';
import { QuizQuestion, Status } from '../../types/types';

type TProps = {
  amount: number;
  category: number;
  difficulty: string;
};

export const useFetchQuiz = ({ amount, category, difficulty }: TProps) => {
  const [quizData, setQuizData] = useState<QuizQuestion[]>([]);
  const [status, setStatus] = useState<Status>('LOADING');

  useEffect(() => {
    const getQuestions = async () => {
      setStatus('LOADING');
      try {
        const res = await fetch(
          `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`
        );
        if (res.status !== 200) {
          throw new Error('shoot');
        }
        const data = await res.json();
        console.log(data);
        setQuizData(data);
        setStatus('FULFILLED');
      } catch (e) {
        console.error(e.message);
        setStatus('ERROR');
      }
    };
  }, [amount, category, difficulty]);

  return { quizData, status };
};
