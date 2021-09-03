import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import style from '../css/header.module.css';

interface Props {
  title?: string;
  desc?: string;
}

export const MyHead: React.FC<Props> = ({ title, desc }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{title || 'いっと☆わーくす！'}</title>
        <meta
          name='description'
          content={desc || 'Kugayama Nana\'s web page. main contents is blog...'}
        />
        <link rel='icon' href='/favicon.ico'/>
      </Head>
      <header>
        <h1 className={style.h1}>
          <a href={router.pathname}>{title || 'いっと☆わーくす！'}</a>
        </h1>
      </header>
    </>
  );
};
