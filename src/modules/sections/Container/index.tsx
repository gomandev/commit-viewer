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
  @media screen and (max-width: 540px) {
    max-width: 90%;
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
    max-width: 90%;
  }
`;
