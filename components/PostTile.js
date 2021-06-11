import styles from '../styles/Home.module.css';

const PostTile = ({ post }) => {

  return (
    <a href={`/posts/${post.slug}`} className={styles.card}>
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
    </a>
  )
}

export default PostTile;