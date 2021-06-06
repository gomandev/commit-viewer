import styled from 'styled-components';
import Head from 'next/head';
import { Container } from '@modules/sections/Container';
import { Logo } from '@modules/atom/logo';
import { SearchBar } from '@modules/blocks/searchbar';
import Top from '@modules/sections/Block';
import { useDispatch, useSelector } from 'react-redux';
import { commitSelector, fetchCommits } from 'store/ducks/commit';
import { Commits } from '@modules/sections/Commits';

export default function Commit() {
  const { keyword, isFetching, commits } = useSelector(commitSelector);
  const data = commits.slice(0, 10);
  console.log(data);
  return (
    <>
      <Head>
        <title>Commits</title>
        <meta name="description" content="Dado Tech Challange" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossOrigin="anonymous"
        />
      </Head>
      <Top />
      <Container>
        <Center>
          <Text>{keyword}</Text>
          {isFetching ? (
            <p>Loading...</p>
          ) : (
            data.map((c: any, index: number) => <Commits data={c} index={index} />)
          )}
        </Center>
      </Container>
    </>
  );
}

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.p`
  margin-top: 32px;
  color: ${({ theme }) => theme.primary};
  font-size: 28px;
  font-weight: 700;
  display: flex;
  align-self: center;
`;

// export async function getStaticProps(context) {}
