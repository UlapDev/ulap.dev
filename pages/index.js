import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ulap.dev: Free Hosting for your basic Single Page App website</title>
        <meta name="description" content="Ulap.dev is a free hosting for students or professionals learning frontend web development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">Ulap.dev</a>
        </h1>

        <p className={styles.description}>
          <h2>Ulap.dev is a free hosting for students or professionals learning frontend web development</h2>
        </p>

        <div className={styles.grid}>
        
	<h2> <a href="https://signup.ulap.dev">Join the beta</a></h2>
        <p>Want to deploy that app but don&apos;t have a domain!? Signup and we&apos;ll get back to you. We can assign a subdomain to your project and host on ulap.dev!</p>
          <p>Note: Please email <a href="mailto:chef@ulap.dev">chef at ulap.dev</a> if we have not replied</p>
        
        </div>
	<div className={styles.grid}>
          <h2>Our offering</h2>
          <p>Through the ulap.dev hosting platform, we will build the ecosystem of service partners that will enable customers to build and host their websites affordably </p>
          <Image width={450} height={332} src="/ulapdev-offering.jpg" />
        </div>
      </main>

      <footer className={styles.footer}>
		&copy; Ulap.dev 2022
     </footer>
    </div>
  )
}
