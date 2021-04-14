import styles from '../styles/Footer.module.scss';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footerContainer}>
        <div className={styles.directoryContainer}>
          <h4>DOCS</h4>
          <a href='/'>Getting Started</a>
        </div>
        <div className={styles.directoryContainer}>
          <h4>CHANNEL</h4>
          <a href='https://deno.land/x/dorm' target='_blank' rel='noreferrer'>
            Deno.land
          </a>
          <a
            href='https://github.com/oslabs-beta/dORM'
            target='_blank'
            rel='noreferrer'
          >
            Github
          </a>
          <a href='' target='_blank' rel='noreferrer'>
            Medium
          </a>
        </div>
        <div className={styles.directoryContainer}>
          <h4>TEAM</h4>
          <Link href='/#team'>
            <a>About Us</a>
          </Link>
        </div>
        <div className={styles.directoryContainer}>
          <h4>SUPPORT</h4>
          <a href='/'>F&Q</a>
        </div>
      </div>
      <p className={styles.copyright}>
        MIT Licensed | Copyright © 2021 dORM. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
