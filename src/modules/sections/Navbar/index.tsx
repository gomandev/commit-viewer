import React, { FC } from 'react';
import styled from 'styled-components';
import { Container } from '../Container';

export const Navbar: FC = () => {
  return (
    <Header>
      <Container>
        <Nav>
          <Logo href="/">CommitViewer</Logo>
          <Ul>
            <li>
              <a href="#" style={{ marginRight: '3em' }}>
                About
              </a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </Ul>
        </Nav>
      </Container>
    </Header>
  );
};

const Header = styled.header`
  width: 100%;
  padding: 2em 0;
`;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  color: ${({ theme }) => theme.primary};
  font-size: 28px;
  font-weight: 700;
`;
const Ul = styled.ul`
  display: inline-flex;
  list-style: none;
  li {
    font-size: 1em;
  }
  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
  }
`;
