import clsx from 'clsx';
import { FC, ReactChild } from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  onClick?: (e: any) => void;
  children: ReactChild;
  width?: string;
  ref?: any;
  value?: string;
}

export const Chip: FC<ButtonProps> = ({ onClick, children, ref, value }) => (
  <But ref={ref} value={value} data-testid="main-chip-cp" onClick={onClick}>
    {children}
  </But>
);

const But = styled.button`
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.accent};
  font-size: 1rem;
  padding: 5px 20px;
  border-radius: ${({ theme }) => theme.corner};
  border: none;
  &:focus {
    outline: 0 !important;
  }
`;
