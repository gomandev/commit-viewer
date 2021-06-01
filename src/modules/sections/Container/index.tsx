import { FC } from 'react';
import styled from 'styled-components';

export const Container: FC = ({ children }) => (
  <>
    <Contain>{children}</Contain>
  </>
);

const Contain = styled.div`
  max-width: 80%;
  margin: 0 auto;
  overflow: hidden;
`;
