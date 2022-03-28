import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Citizen Developers - citdev.io</title>
        <meta name="description" content="Citizen Developers" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <div style={ { textAlign: 'center' } }>
        <Image src="/citdev.png" alt="Citizen Developers" width={1092} height={630} /><br />
        <Link href="/privacy.html">Privacy Page</Link><br />
        <Link href="/terms.html">Terms of Service</Link><br />
      </div>
    </div>
  )
}
