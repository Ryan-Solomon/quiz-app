import React from 'react';
import styled from 'styled-components';

export function Quiz() {
  return (
    <StyledQuizContainer>
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
    </StyledQuizContainer>
  );
}

const StyledQuizContainer = styled.main`
  background: #222;
  display: flex;
  flex-direction: column;
  width: 30vw;
  height: 50vh;
`;

const QuizLabel = styled.label`
  color: #fff;
`;

const QuizInput = styled.input`
  color: #fff;
`;

const QuizSelect = styled.select``;

const QuizOption = styled.option`
  color: #fff;
`;

const QuizButton = styled.button`
  border: 1px solid teal;
  color: #dfdfdf;
`;
