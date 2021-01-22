import styled from 'styled-components';
import Quiz from '../components/Quiz';

export default function QuizScreen() {
  return (
    <QuizContainer>
      <Quiz />
    </QuizContainer>
  );
}

const QuizContainer = styled.main`
  display: grid;
  place-items: center;
  height: 80vh;
`;
