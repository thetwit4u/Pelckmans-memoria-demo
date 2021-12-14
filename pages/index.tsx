import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Memoria2 Template</title>
        <meta content='Memoria2 Template' name='description' />
        <link href='/favicon.ico' rel='icon' />
      </Head>

      <main className={styles.main}>
        <section className={styles['title-wrapper']}>
          {/* main title */}
          <h1 className={styles['main-title']}>Hedendaagse resten van de pan-Helleense cultuur</h1>
          {/* subtitle */}
          <h2>Digitale Exploratie</h2>
        </section>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
