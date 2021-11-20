import Head from 'next/head';
import styles from '../styles/Home.module.css';
import SideBar from '../components/SideBar';
import PostTile from '../components/PostTile';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import { getAllPosts } from '../lib/api';
import { useState, useEffect } from 'react';

export default function Home({ allPosts }) {

  const [showSideBar, toggleSideBar] = useState(true);

  useEffect(() => {
    const width = window.innerWidth;
    if (width <= 600) {
      toggleSideBar(false)
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Chris Tulin | Developer</title>
        <meta name="description" content="The portfolio website for Chris Tulin, along with a collection of rants about software engineering, web development, and marketing automation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SideBar showSideBar={showSideBar}/>
      <main className={styles.main}>
        <div className={styles.grid}>
          {allPosts.map((post, i) => <PostTile post={post} key={i} />)}
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}