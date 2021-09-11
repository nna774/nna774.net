import { useRouter } from 'next/router';
import { getPostBySlug, getAllPosts } from '../../lib/api';
import { markdownToHtml } from '../../lib/markdownToHtml';
import Head from 'next/head';

type Props = {
  posts: Array<{
    date: string;
    title: string;
    content: string;
  }>;
};

// getStaticProps()で返された内容が引数で受け取られる
const Post = ({ posts }: Props) => {
  const post = posts[0];
  const content = markdownToHtml(post.content);

  return (
    <>
      <article>
        <Head>
          <title>{post.title} | </title>
        </Head>
        {content}
      </article>
    </>
  );
};

export default Post;

export async function getStaticProps() {
  const allPosts = getAllPosts();
  const ps = allPosts.map((p) => getPostBySlug(p));

  return {
    props: { posts: ps },
  };
}
