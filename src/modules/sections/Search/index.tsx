import { Button } from '@modules/atom/button';
import { Chip } from '@modules/atom/chip';
import { SearchBar } from '@modules/blocks/searchbar';
import React, { FC, useRef, useState } from 'react';
import styled from 'styled-components';
import { Container } from '../Container';
import { useDispatch } from 'react-redux';
import { fetchCommits, handleKeyword } from 'store/ducks/commit';

interface IProps {
  data: any;
}

export const Search: FC<IProps> = ({ data }: IProps) => {
  const [payload, setPayload] = useState('');
  const text = useRef<HTMLButtonElement>(null);
  const dispatch = useDispatch();
  const onButtonClick = e => {
    // `current` points to the mounted text input element
    setPayload(e);
    dispatch(handleKeyword(e));
    dispatch(fetchCommits({ repo: e }));
  };
  console.log(payload);
  return (
    <Wrap>
      <Container>
        <Flex>
          <SearchBar />
          <Text>Or pick one of these suggested repos</Text>
          <Premade>
            {data.map(({ full_name }: any, index: number) => (
              <Chip
                value={full_name}
                onClick={e => onButtonClick(e.currentTarget.value)}
                ref={text}
              >
                {full_name}
              </Chip>
            ))}
          </Premade>
        </Flex>
      </Container>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  margin-top: 3em;
`;

const Flex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: cemter;
  align-items: center;
`;

const Premade = styled.div`
  display: flex;
  margin-top: 2em;
  justify-content: space-between;
  button {
    margin-right: 2em;
    width: fit-content;
    @media screen and (max-width: 540px) {
      margin-bottom: 16px;
      padding: 10px 20px !important;
      margin-right: 0;
    }
    @media only screen and (min-width: 1024px) and (max-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) {
      margin-bottom: 16px;
      padding: 10px 20px !important;
      margin-right: 0;
    }
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
      margin-bottom: 16px;
      padding: 10px 20px !important;
      margin-right: 0;
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

const Heading = styled.h1`
  color: ${({ theme }) => theme.primary};
  font-size: 4.5rem;
  font-weight: 600;
  margin: 0;
  text-align: center;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.primary};
  font-size: 1rem;
  width: 400px;
  text-align: center;
  line-height: 25px;
`;
