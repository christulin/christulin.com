import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

const Contact = () => {

  //Leaving hide show logic for now
  const showSideBar = true;

  return (
    <div className={styles.container}>
      <SideBar showSideBar={showSideBar}/>
      <main className={styles.main}>
        <p>Contact Section Will be added here</p>
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default Contact;