import { FC } from 'react';
import styled from 'styled-components';

export const Logo: FC = ({ children }) => {
  return <Text href="/">{children}</Text>;
};

const Text = styled.a`
  color: ${({ theme }) => theme.primary};
  font-size: 28px;
  font-weight: 700;
  display: flex;
  align-self: center;
`;
