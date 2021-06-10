import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import Head from 'next/head'
// import { CMS_NAME } from '../../lib/constants'
import PostHeader from '../../components/PostHeader';
import markdownToHtml from '../../lib/markdownToHtml.js'

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()
  // if (!router.isFallback && !post?.slug) {
  //   return <ErrorPage statusCode={404} />
  // }
  return (

      <article className="mb-32">
        <Head>
          <title>
            {post.title}
          </title>
          {/* <meta property="og:image" content={post.ogImage.url} /> */}
        </Head>

        {/* Add components postHeader and postBody.. build basic strucuture */}

        <PostHeader
          title={post.title}
          date={post.date}
          author={post.author}
        />
        {/* <PostBody content={post.content} /> */}
      </article>
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