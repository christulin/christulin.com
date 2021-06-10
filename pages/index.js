import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chris Tulin | Developer</title>
        <meta name="description" content="The portfolio website for Chris Tulin, along with a collection of rants about software engineering, web development, and marketing automation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Chris Tulin's personal site
        </h1>

        <p className={styles.description}>
          More is on its way soon
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/christulin" className={styles.card}>
            <h3>Github</h3>
            <p>Check out my repositories!</p>
          </a>

          <a href="https://www.linkedin.com/in/christopher-tulin-2469b4122/" className={styles.card}>
            <h3>Linkedin</h3>
            <p>Connect with me on Linkedin</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        &copy; 2021
      </footer>
    </div>
  )
}
