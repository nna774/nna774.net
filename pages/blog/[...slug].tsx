import { getPostBySlug, getAllPosts, Items, Slug } from '../../lib/api';
import { markdownToHtml } from '../../lib/markdownToHtml';
import Head from 'next/head';
import { GetStaticPropsContext } from 'next';

type Props = {
  post: Items;
};

const Post = ({ post }: Props) => {
  const content = markdownToHtml(post.content);

  return (
    <article>
      <Head>
        <title>{post.title} | </title>
      </Head>
      {content}
    </article>
  );
};

export default Post;

type Params = {
  params: {
    slug: Slug;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const post = getPostBySlug(params.slug);
  return {
    props: { post },
  };
};

export const getStaticPaths = async () => {
  const posts = getAllPosts();
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post,
        },
      };
    }),
    fallback: false,
  };
};
