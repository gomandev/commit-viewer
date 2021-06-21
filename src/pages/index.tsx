import { Masthead } from '@modules/sections/MasterHead';
import { Navbar } from '@modules/sections/Navbar';
import { Search } from '@modules/sections/Search';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  commitSelector,
  fetchCommits,
  fetchTrending,
  handleKeyword,
} from 'store/ducks/commit';
import { useRouter } from 'next/router';

export default function Home() {
  const { isFetching, trending } = useSelector(commitSelector);
  const dispatch = useDispatch();
  const router = useRouter();
  if (isFetching) {
    router.push('/commit');
  }
  useEffect(() => {
    dispatch(fetchTrending());
  }, []);
  console.log(trending);
  const data = trending.slice(0, 5);

  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Github Commit Viewer" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossOrigin="anonymous"
        />
      </Head>
      <Navbar />
      <Masthead />
      <Search data={data} />
    </>
  );
}

// export async function getStaticProps(context) {}
