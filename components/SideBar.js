import styles from '../styles/SideBar.module.css';

const SideBar = () => {

  return (
    <aside id={styles.mainNav} className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span class="fs-4">Chris Tulin</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item"><a className="nav-link text-white" href="/">home</a></li>
        <li className="nav-item"><a className="nav-link text-white" href="/contact">contact</a></li>
        <li className="nav-item"><a className="nav-link text-white" href="/about">about</a></li>
      </ul>
    </aside>

  )
}

export default SideBar