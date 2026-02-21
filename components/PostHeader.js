import styles from '../styles/PostHeader.module.css';

const PostHeader = ({ title, date, author }) => {
  const formattedDate = date
    ? new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null;

  const authorName = author?.name || (typeof author === 'string' ? author : null);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      {(authorName || formattedDate) && (
        <div className={styles.meta}>
          {authorName && <span className={styles.author}>{authorName}</span>}
          {authorName && formattedDate && (
            <span className={styles.divider} aria-hidden="true">&bull;</span>
          )}
          {formattedDate && (
            <time dateTime={date}>{formattedDate}</time>
          )}
        </div>
      )}
    </header>
  );
};

export default PostHeader;
