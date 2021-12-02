import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import Head from 'next/head'
import PostBody from '../../components/PostBody';
import PostHeader from '../../components/PostHeader';
import SideBar from '../../components/SideBar';
import Footer from '../../components/Footer';
import markdownToHtml from '../../lib/markdownToHtml.js'
import styles from '../../styles/Home.module.css';
import { useEffect, useState } from 'react';
import { useWindowSize } from '../../lib/windowSize';

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()
  // if (!router.isFallback && !post?.slug) {
  //   return <ErrorPage statusCode={404} />
  // }

  const showSideBar = true;
  const { width } = useWindowSize();
  const [ dropDownActive, setDropDownActive ] = useState(false);

  const handleMobileDropdown = value => {
    setDropDownActive(value);
  }

  return (
      <>
        <Head>
          <title>
            {post.title}
          </title>
        </Head>
        <SideBar showSideBar={showSideBar} handleMobileDropdown={handleMobileDropdown} />
        <main className={styles.main} data-freeze={dropDownActive ? 'frozen' : ''}>
          <article>
            <PostHeader
              title={post.title}
              date={post.date}
              author={post.author}
            />
            <PostBody content={post.content} />
          </article>
        </main>
        { width < 992 ? <Footer /> : ''}
      </>
  )
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
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}