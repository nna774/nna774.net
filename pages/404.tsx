import type { NextPage, InferGetStaticPropsType } from 'next';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Error404: NextPage<Props> = () => {
  return (
    <div>
      <main>
        <h2>40404</h2>
      </main>
    </div>
  );
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default Error404;
