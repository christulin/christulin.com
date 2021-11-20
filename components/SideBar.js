import styles from '../styles/SideBar.module.css';
import Image from 'next/image';
import { useState } from 'react';


const SideBar = ({ showSideBar }) => {

  const [ showDrawer, toggleDrawer ] = useState(false);

  const handleHamburgerClick = (e) => {

    const burger = document.getElementById(`${showDrawer ? 'open' : 'shut'}`)
    const drawer = document.getElementById('mobile-drawer');
    const topRow = document.getElementById('row-one');
    const middleRow = document.getElementById('row-two');
    const bottomRow = document.getElementById('row-three');

    if (!showDrawer) {
      middleRow.style.display = 'none';
      topRow.style.transform = 'rotate(-45deg)';
      topRow.style.position = 'absolute';
      bottomRow.style.transform = 'rotate(45deg)';
      bottomRow.style.position = 'absolute';
      drawer.style.top = '10vh';
      burger.id = 'open';
    } else {
      middleRow.style.display = 'block';
      topRow.style.transform = 'rotate(0deg)';
      topRow.style.position = 'relative';
      bottomRow.style.transform = 'rotate(0deg)';
      bottomRow.style.position = 'relative';
      drawer.style.top = '-30vh';
      burger.id = 'shut';
    }
    toggleDrawer(!showDrawer);
  }

  if (showSideBar) {
    return (
      <>
        <div className={styles.sideBar} id="sideBar">
          <aside id={styles.mainNav}>
            <div className={styles.titleContainer}>
              <div className={styles.headShotWrap}>
                <Image src="/headshot.jpg" layout="fill" objectFit="cover" className={styles.headShotImage}/>
              </div>
              <a href="/" className={styles.name}>
                <span>Chris Tulin</span>
              </a>
            </div>
            <hr className={styles.rule} />
            <ul className={styles.navContainer}>
              <li className={styles.navItem}><a className={styles.navLink} href="/">home</a></li>
              <li className={styles.navItem}><a className={styles.navLink} href="/contact">contact</a></li>
              <li className={styles.navItem}><a className={styles.navLink} href="/about">about</a></li>
            </ul>
            <div id="shut" className={styles.hamburger} onClick={handleHamburgerClick}>
              <div id="row-one" className={styles.hamburgerRow}></div>
              <div id="row-two" className={styles.hamburgerRow}></div>
              <div id="row-three" className={styles.hamburgerRow}></div>
            </div>
          </aside>
        </div>
        <div id="mobile-drawer" className={styles.mobileDrawer}>
          <ul className={styles.mobileDrawerList}>
            <li className={styles.mobileDrawerListItem}><a className={styles.drawerLink} href="/">home</a></li>
            <li className={styles.mobileDrawerListItem}><a className={styles.drawerLink} href="/contact">contact</a></li>
            <li className={styles.mobileDrawerListItem}><a className={styles.drawerLink} href="/about">about</a></li>
          </ul>
        </div>
      </>
    )
  } else {
    return <></>
  }
}

export default SideBar