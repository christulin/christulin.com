import styles from '../styles/SideBar.module.css';

const SideBar = () => {

  return (
    <div className={styles.inner}>
      <h1>Chris Tulin</h1>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><a href="/">home</a></li>
        <li className="list-group-item"><a href="/contact">contact</a></li>
        <li className="list-group-item"><a href="/about">about</a></li>
      </ul>
    </div>

  )
}

export default SideBar