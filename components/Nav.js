import styles from '../styles/Nav.module.css';
import React from 'react';

const Nav = ({ toggleSideBar, showSideBar }) => {

  const handleClick = () => {
    if (typeof toggleSideBar === 'function') {
      toggleSideBar(!showSideBar);
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom" id={styles.nav}>
      <div className="container-fluid justify-content-end">
        <button className="btn btn-primary" id="sideBarToggle" onClick={handleClick}>Show Sidebar</button>
      </div>
    </nav>
  )
}

export default Nav;