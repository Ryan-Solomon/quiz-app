import React from 'react';
import styled from 'styled-components';

export function Quiz() {}

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

const QuizButton = styled.button`
  border: 1px solid teal;
  color: #dfdfdf;
`;
