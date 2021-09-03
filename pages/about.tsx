import React from 'react';
import type { NextPage, InferGetStaticPropsType } from 'next';
import { MyHead } from '../components/head';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const About: NextPage<Props> = () => {
  return (
    <div>
      <MyHead title="About" />
    </div>
  );
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default About;
