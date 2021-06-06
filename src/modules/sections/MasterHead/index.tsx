import React, { FC } from 'react';
import styled from 'styled-components';
import { Container } from '../Container';

export const Masthead: FC = () => {
  return (
    <Wrap>
      <Container>
        <Flex>
          <Heading>
            Discover the <br /> world of code
          </Heading>
          <Text>
            Explore open source projects from GitHub, and read their commit history
            to see the story of how they were built.
          </Text>
        </Flex>
      </Container>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
`;

const Flex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  color: ${({ theme }) => theme.primary};
  font-size: 4.5rem;
  font-weight: 600;
  margin: 0;
  text-align: center;
  @media screen and (max-width: 540px) {
    font-size: 3rem;
    width: 100%;
  }
`;

const Text = styled.p`
  color: ${({ theme }) => theme.primary};
  font-size: 1.2rem;
  width: 400px;
  text-align: center;
  line-height: 25px;
  @media screen and (max-width: 540px) {
    font-size: 1rem;
    width: 100%;
  }
`;
