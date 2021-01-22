export type QuizQuestion = {
  category: string;
  type: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export type Status = 'LOADING' | 'ERROR' | 'FULFILLED';
