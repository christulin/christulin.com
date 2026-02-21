import styles from '../styles/markdown-styles.module.css';

const PostBody = ({ content }) => {
  return (
    <div
      className={styles.markdown}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default PostBody;
