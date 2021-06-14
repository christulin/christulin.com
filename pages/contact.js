import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

const Contact = () => {

  return (
    <div className={styles.container}>
      <div className={styles.sideBar}>
        <SideBar />
      </div>
      <main className={styles.main}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-8">
              <p>Contact Section Will be added here</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Contact;