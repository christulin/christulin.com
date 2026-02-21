import { getPostBySlug, getAllPosts } from '../../lib/api';
import Head from 'next/head';
import PostBody from '../../components/PostBody';
import PostHeader from '../../components/PostHeader';
import markdownToHtml from '../../lib/markdownToHtml.js';

export default function Post({ post }) {
  return (
    <>
      <Head>
        <title>{`${post.title} | Chris Tulin`}</title>
      </Head>
      <article>
        <PostHeader
          title={post.title}
          date={post.date}
          author={post.author}
        />
        <PostBody content={post.content} />
      </article>
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => ({
      params: { slug: post.slug },
    })),
    fallback: false,
  };
}
