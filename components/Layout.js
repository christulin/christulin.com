import Nav from './Nav';
import Footer from './Footer';
import styles from '../styles/Layout.module.css';

const Layout = ({ children, theme, toggleTheme }) => {
  return (
    <div className={styles.wrapper}>
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
