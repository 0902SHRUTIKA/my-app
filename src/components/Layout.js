import React from 'react';
import Head from 'next/head';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Union Public Service Commission</title>
      </Head>
      <header className={styles.header}>
        <div className={styles.topBar}>
          <div>
            <a href="#">SiteMap</a> | <a href="#">Skip To Main Content</a>
          </div>
          <div>
            <input type="text" placeholder="Search - Keyword, Phrase" />
            <button>Search</button>
          </div>
        </div>
        <div className={styles.mainHeader}>
          <img src="/Safelock Logo.png" alt="Safelock Logo" className={styles.logo} />
          <img src="/supprot.jpg" alt="Safelock Logo" className={styles.logosupport} />
          <div className={styles.title}>
            <h1>SAFELOCK CYBER SUPPORT</h1>
          </div>
          <div className={styles.actions}>
          <div className={styles.banner}>
          <div className={styles.bannerText}>
            <p>Is your company prepared for a cyber-attack?</p>
            <h2>Secure your data and assets</h2>
          </div>
          <button className={styles.contactButton}>Assessment</button>
        </div>
        </div>
         
        </div>
        <nav className={styles.navBar}>
          <a href="#">HOME</a>
          <a href="#">GET HELP</a>
          <a href="#">SUPPORT US</a>
          <a href="#">GUIDES</a>
          <a href="#">NEWS</a>
          <a href="#">ABOUT</a>
          <a href="#">JOIN US</a>
          <a href="#">CONTACT</a>
          <a href="#">REFERRAL</a>
          <a href="#">PARTNERS</a>
          <a href="#">LINKS</a>
          <a href="#">DONATE</a>
        </nav>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>© 2024 My Simple Site</p>
      </footer>
    </div>
  );
};

export default Layout;
