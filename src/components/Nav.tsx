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

const NavContainer = styled.nav``;

const NavListContainer = styled.ul``;

const NavItem = styled.li``;
