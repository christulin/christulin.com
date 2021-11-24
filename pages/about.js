import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

const About = () => {

  const showSideBar = true;

  return (
    <div className={styles.container}>
      <SideBar showSideBar={showSideBar}/>
      <main className={styles.main}>
        <p>About Section Will be added here</p>
      </main>
      {/* <Footer /> */}
   </div>
  )
}

export default About;