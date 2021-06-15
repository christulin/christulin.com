import styles from '../styles/Nav.module.css';

const Nav = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom" id={styles.nav}>
      <div className="container-fluid justify-content-end">
        <button className="btn btn-primary" id="sideBarToggle">Show Sidebar</button>
      </div>
    </nav>
  )
}

export default Nav;