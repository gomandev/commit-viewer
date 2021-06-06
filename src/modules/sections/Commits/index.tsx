import { FC } from 'react';
import styled from 'styled-components';

interface IProps {
  index: number;
  data: any;
  sm?: boolean;
}

export const Commits: FC<IProps> = ({ data, index, sm }: IProps) => {
  const { avatar_url, login } = data.author;
  if (sm) {
    return (
      <Flex key={index}>
        <Text>{data.commit.message}</Text>
        <Inner>
          <div>
            <Thumb src={avatar_url} />
            <Name>{login}</Name>
          </div>
          <p>23:30 28/04/2021</p>
        </Inner>
      </Flex>
    );
  }
  return (
    <Flex key={index}>
      <Left>
        <Inner>
          <div>
            <Thumb src={avatar_url} />
            <Name>{login}</Name>
          </div>
          <Text>{data.commit.message}</Text>
        </Inner>
      </Left>
      <Right>
        <p>23:30 28/04/2021</p>
      </Right>
    </Flex>
  );
};

const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  @media screen and (max-width: 540px) {
    flex-direction: column !important;
  }
`;

const Left = styled.div`
  flex-basis: 70%;
`;

const Right = styled.div`
  flex-basis: 30%;
  display: contents;
  p {
    font-size: 22px;
    color: ${({ theme }) => theme.primary};
  }
`;

const Inner = styled.div`
  display: flex;
  div {
    margin-right: 77px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
const Thumb = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

const Text = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
  display: flex;
  justify-self: center;
  align-self: center;
`;

const Name = styled.p`
  font-size: 22px;
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
  text-align: center;
`;
