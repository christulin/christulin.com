import Head from 'next/head';
import styles from '../styles/Home.module.css';
import SideBar from '../components/SideBar';
import PostTile from '../components/PostTile';
import Footer from '../components/Footer';
import { getAllPosts } from '../lib/api';
import { useWindowSize } from '../lib/windowSize';
import { useState } from 'react';

export default function Home({ allPosts }) {

  const showSideBar = true;
  const { width } = useWindowSize();
  const [ dropDownActive, setDropDownActive ] = useState(false);

  const handleMobileDropdown = value => {
    setDropDownActive(value);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Chris Tulin | Developer</title>
        <meta name="description" content="The portfolio website for Chris Tulin, along with a collection of rants about software engineering, web development, and marketing automation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SideBar showSideBar={showSideBar} handleMobileDropdown={handleMobileDropdown} />
      <main className={styles.main} data-freeze={dropDownActive ? 'frozen' : ''} >
        <div className={styles.grid}>
          {allPosts.map((post, i) => <PostTile post={post} key={i} />)}
        </div>
      </main>
      { width < 992 ? <Footer /> : ''}
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