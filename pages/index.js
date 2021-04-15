import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Team from '../components/Team';
import Feature from '../components/Feature';
import styles from '../styles/Main.module.scss';

export default function Home() {
  return (
    <>
      <div className={styles.landingPageIntro}>
        <div
          style={{
            position: 'relative',
            width: '300px',
            height: '168px',
          }}
        >
          <Image src='/dorm.png' alt='dorm' layout='fill' objectFit='contain' />
        </div>
        <h1>dORM</h1>
        <p>
          dORM is an uber-lightweight SQL query builder for postgreSQL and is
          currently being expanded into a full-fledged object-relational mapping
          (ORM) tool. Its purpose is to make your life easier when making SQL
          queries and let you write queries in familiar Javascript/Typescript
          syntax and dot notation.
        </p>
        <Link href='./docs'>
          <button>Get Started</button>
        </Link>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Feature />
      </div>
      <div className={styles.teamContainer}>
        <h1 className={styles.teamContainerTitle}>TEAM</h1>
        <Team />
      </div>
    </>
  );
}
