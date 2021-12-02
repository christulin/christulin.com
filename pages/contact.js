import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import { useWindowSize } from '../lib/windowSize';

const Contact = () => {

  //Leaving hide show logic for now
  const showSideBar = true;
  const { width } = useWindowSize();
  const [ dropDownActive, setDropDownActive ] = useState(false);

  const handleMobileDropdown = value => {
    setDropDownActive(value);
  }

  return (
    <div className={styles.container}>
      <SideBar showSideBar={showSideBar} handleMobileDropdown={handleMobileDropdown} />
      <main className={styles.main} data-freeze={dropDownActive ? 'frozen' : ''}>
        <p>Contact Section Will be added here</p>
      </main>
      { width < 992 ? <Footer /> : ''}
    </div>
  )
}

export default Contact;