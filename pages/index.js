import Head from 'next/head';
import styles from '../styles/Home.module.css';
import PostTile from '../components/PostTile';
import { getAllPosts } from '../lib/api';

export default function Home({ allPosts }) {
  return (
    <>
      <Head>
        <title>Chris Tulin | Developer</title>
        <meta name="description" content="The portfolio website for Chris Tulin, along with a collection of rants about software engineering, web development, and marketing automation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.pageContent}>
        <div className={styles.grid}>
          {allPosts.map((post, i) => <PostTile post={post} key={i} />)}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'excerpt',
  ]);

  return {
    props: { allPosts },
  };
}
