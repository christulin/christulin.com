import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import Head from 'next/head'
import PostBody from '../../components/PostBody';
import PostHeader from '../../components/PostHeader';
import SideBar from '../../components/SideBar';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import markdownToHtml from '../../lib/markdownToHtml.js'
import styles from '../../styles/Home.module.css';

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()
  // if (!router.isFallback && !post?.slug) {
  //   return <ErrorPage statusCode={404} />
  // }
  return (
      <>
        <Head>
          <title>
            {post.title}
          </title>
        </Head>
        <Nav />
        <SideBar />
        <main className={styles.main}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-4">
                {/* <SideBar /> */}
              </div>
              <div className="col-sm-8">
                <article className="mb-32">
                  <PostHeader
                    title={post.title}
                    date={post.date}
                    author={post.author}
                  />
                  <PostBody content={post.content} />
                </article>
              </div>
            </div>
          </div>
        </main>
        <Footer />
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