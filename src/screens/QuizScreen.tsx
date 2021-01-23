import React from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import Quiz from '../components/Quiz';

export default function QuizScreen() {
  return (
    <>
      <Nav />
      <QuizContainer>
        <Quiz />
      </QuizContainer>
    </>
  );
}

const QuizContainer = styled.main`
  display: grid;
  place-items: center;
  height: 80vh;
`;
