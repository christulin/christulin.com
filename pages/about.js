import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';

const About = () => {

  const [showSideBar, toggleSideBar] = useState(true);

  useEffect(() => {
    const width = window.innerWidth;
    if (width <= 600) {
      toggleSideBar(false)
    }
  }, []);

  return (
    <div className={styles.container}>
      <Nav toggleSideBar={toggleSideBar} showSideBar={showSideBar}/>
      <SideBar showSideBar={showSideBar}/>
      <main className={styles.main}>
        <div className="container-fluid">
          <div className="row">

            <div className="col-sm-8">
              <p>About Section Will be added here</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
   </div>
  )
}

export default About;