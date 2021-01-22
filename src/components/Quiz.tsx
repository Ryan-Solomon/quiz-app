import React from 'react';
import styled from 'styled-components';

export default function Quiz() {
  return (
    <StyledQuizContainer>
      <QuizTitle>Quiz</QuizTitle>
      <QuizLabel htmlFor='number-of-questions'>Number of Questions</QuizLabel>
      <QuizInput id='number-of-questions' type='text' />
      <QuizLabel htmlFor='category'>Category</QuizLabel>
      <QuizSelect name='category' id='category'>
        <QuizOption value='sports'>Sports</QuizOption>
        <QuizOption value='celebrities'>Celebrities</QuizOption>
        <QuizOption value='mythology'>Mythology</QuizOption>
      </QuizSelect>
      <QuizLabel htmlFor='difficulty'>Difficulty</QuizLabel>
      <QuizSelect name='difficulty' id='difficulty'>
        <QuizOption value='easy'>Easy</QuizOption>
        <QuizOption value='medium'>Medium</QuizOption>
        <QuizOption value='hard'>Hard</QuizOption>
      </QuizSelect>
      <QuizButton>Start Quiz</QuizButton>
    </StyledQuizContainer>
  );
}

const StyledQuizContainer = styled.main`
  background: #222;
  display: flex;
  flex-direction: column;
  width: 30vw;
  justify-content: flex-start;
  align-items: center;
  padding: 1.5rem;
  box-shadow: 2px 2px 10px #444;
`;

const QuizTitle = styled.h1`
  color: white;
  margin-bottom: 1rem;
  font-size: 2.5rem;
`;

const QuizLabel = styled.label`
  color: #fff;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const QuizInput = styled.input`
  color: #333;
  width: 80%;
  font-size: 1.5rem;
  padding: 0.3rem;
  margin-bottom: 1rem;
`;

const QuizSelect = styled.select`
  width: 80%;
  font-size: 1.5rem;
  padding: 0.3rem;
  margin-bottom: 1rem;
`;

const QuizOption = styled.option`
  color: #333;
`;

const QuizButton = styled.button`
  border: 1px solid #fff;
  color: #fff;
  padding: 0.5rem;
  background: none;
  margin-top: 1rem;
`;

// 1 - Add quiz functionality
// 2 - Add routes
