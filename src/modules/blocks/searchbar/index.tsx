import { Button } from '@modules/atom/button';
import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { fetchCommits, handleKeyword } from 'store/ducks/commit';

interface IProps {
  setKeyword: Function;
}

export const SearchBar: FC = () => {
  const [payload, setPayload] = useState('');
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(handleKeyword(payload));
    dispatch(fetchCommits({ repo: payload }));
  };
  const setKey = e => {
    setPayload(e);
  };

  return (
    <Search>
      <div>
        <input
          placeholder="Eg. facebook/react"
          onChange={e => setKey(e.target.value)}
          type="text"
        />
        <i className="fas fa-search"></i>
      </div>
      <Button onClick={() => onClick()}>See commits 🚀</Button>
    </Search>
  );
};

const Search = styled.div`
  display: flex;
  input {
    background-color: ${({ theme }) => theme.gray};
    width: 694px;
    padding: 1em 2em;
    border: none;
    border-radius: ${({ theme }) => theme.corner};
    font-size: 1.2rem;
    &:focus {
      outline: 0 !important;
    }
    @media screen and (max-width: 540px) {
      width: 100%;
    }
  }
  div {
    position: relative;
    margin-right: 2em;
    @media screen and (max-width: 540px) {
      margin-right: 0;
      margin-bottom: 24px;
    }
  }
  i {
    color: ${({ theme }) => theme.primary};
    font-size: 1em;
    position: absolute;
    top: 35%;
    left: 2%;
    @media screen and (max-width: 540px) {
      left: 5%;
    }
  }
  @media screen and (max-width: 540px) {
    flex-direction: column;
  }
`;
