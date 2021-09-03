import React from 'react';
import Head from 'next/head';

interface Props {
  title?: string;
  desc?: string;
}

export const MyHead: React.FC<Props> = ({ title, desc }) => {
  return (
    <Head>
      <title>{title || 'いっと☆わーくす！'}</title>
      <meta
        name="description"
        content={desc || "Kugayama Nana's web page. main contents is blog..."}
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
