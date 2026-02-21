import Link from 'next/link';
import styles from '../styles/PostTile.module.css';

const PostTile = ({ post }) => {
  const formattedDate = post.date
    ? new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null;

  return (
    <Link href={`/posts/${post.slug}`} className={styles.card}>
      <article>
        <h3 className={styles.title}>{post.title}</h3>
        {formattedDate && <p className={styles.date}>{formattedDate}</p>}
        {post.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}
        <span className={styles.readMore}>Read more &rarr;</span>
      </article>
    </Link>
  );
};

export default PostTile;
