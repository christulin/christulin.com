import SideBar from '../components/SideBar';
import styles from '../styles/Home.module.css';

const Contact = () => {

  return (
    <main className={styles.main}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4">
            <SideBar />
          </div>
          <div className="col-sm-8">
            <p>Contact Section Will be added here</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contact;