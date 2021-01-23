import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Nav() {
  return (
    <NavContainer>
      <NavListContainer>
        <Link to='/'>
          <NavItem>Home</NavItem>
        </Link>
        <Link to='/quiz'>
          <NavItem>Quiz</NavItem>
        </Link>
      </NavListContainer>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  background: #222;
  padding: 1rem;
  box-shadow: 2px 2px 10px #6d6d6d;
`;

const NavListContainer = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  margin-right: 2rem;
`;

const NavItem = styled.li`
  text-decoration: none;
  font-size: 2rem;
  color: #8a8a8a;
  padding: 0 2rem;
  transition: all 0.2s ease;

  &:hover {
    cursor: pointer;
    color: white;
  }
`;
