import React from 'react';
import type { NextPage, InferGetStaticPropsType } from 'next';
import { MyHead } from '../components/head';
import { Footer } from '../components/footer';
import style from '../css/home.module.css';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

type Section = {
  name: string;
  to: string;
  desc: string;
  faviconStyle?: string;
};

const sections: ReadonlyArray<Section> = [
  {
    name: 'rebuild-kitashirakawa',
    to: 'https://scrapbox.io/rebuild-kitashirakawa/',
    desc: 'こっちが日記となった。なんでもこちらに書いちゃうので、ブログが更新されない……。',
  },
  {
    name: 'Blog',
    to: '/blog/',
    desc: '最近更新していない。',
  },
  {
    name: 'Piet',
    to: '/piet/',
    desc: 'Pietを書いていた時期もあった。',
    faviconStyle: style.pietFavicon,
  },
  {
    name: 'Projects',
    to: '/projects/',
    desc: '最近更新していないもの(最近更新しているもののほうが少ない)',
  },
];
function renderSection(section: Section): JSX.Element {
  const fs = section.faviconStyle || style.defaultFavicon;
  return (
    <section key={section.name} className={style.section}>
      <div className={fs}>
        <a href={section.to}>{section.name}</a>
      </div>
      {section.desc}
    </section>
  );
}

const Home: NextPage<Props> = () => {
  return (
    <>
      <MyHead />
      <main>
        <h2>index of nna774.net</h2>
        <div className={style.flexContainer}>{sections.map(renderSection)}</div>
      </main>
      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default Home;
