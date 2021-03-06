import styled from 'styled-components';
import { Container } from '@modules/sections/Container';
import { Logo } from '@modules/atom/logo';
import { SearchBar } from '@modules/blocks/searchbar';

export default function Top() {
  return (
    <>
      <Div>
        <Container>
          <Flex>
            <Logo>CommitViewer</Logo>
            <SearchBar />
          </Flex>
        </Container>
      </Div>
    </>
  );
}

const Div = styled.div`
  width: 100%;
  padding: 2em 0;
  background-color: ${({ theme }) => theme.lightGray};
`;

const Flex = styled.div`
  display: flex;
  a {
    margin-right: 2em;
    @media screen and (max-width: 540px) {
      margin-right: 0;
    }
  }
  div {
    @media screen and (max-width: 540px) {
      display: none;
    }
    @media only screen and (min-width: 1024px) and (max-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) {
      display: none;
    }
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
      display: none;
    }
  }
  @media screen and (max-width: 540px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media only screen and (min-width: 1024px) and (max-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
