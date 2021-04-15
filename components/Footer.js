import styles from '../styles/Footer.module.scss';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footerContainer}>
        <div className={styles.directoryContainer}>
          <h4>DOCS</h4>
          <Link href='/docs/getting-started'>
            <a>Introduction</a>
          </Link>
          <Link href='/docs/getting-started/#getting-started'>
            <a>Getting Started</a>
          </Link>
          <Link href='/docs/query-builder'>
            <a>Query Builder</a>
          </Link>
          <Link href='/docs/model'>
            <a>Models</a>
          </Link>
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
          <a
            href='https://myounghanjinick.medium.com/introducing-dorm-bringing-sql-orm-and-query-building-to-deno-690d24785535'
            target='_blank'
            rel='noreferrer'
          >
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
          <Link href='/'>
            <a>FAQ</a>
          </Link>
        </div>
      </div>
      <p className={styles.copyright}>
        MIT Licensed | Copyright © 2021 dORM. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
