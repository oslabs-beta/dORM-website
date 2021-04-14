import Image from 'next/image';
import styles from '../styles/Team.module.scss';

export default function Team() {
  return (
    <>
      <div className={styles.teamComp} id='teamComp'>
        <div className={styles.teamCard}>
          <Image src='/red.png' alt='red' width={200} height={200} />
          <h1>Han Dump</h1>
          <h4>he likes to make it useful.</h4>
          <div className={styles.logoRow}>
            <a
              href='https://github.com/chaekmh'
              target='_blank'
              rel='noreferrer'
            >
              <Image
                className={styles.logo}
                src='/github.png'
                alt='github'
                width={50}
                height={50}
              />
            </a>
            <a
              href='https://linkedin.com/in/chaehan'
              target='_blank'
              rel='noreferrer'
            >
              <Image
                className={styles.logo}
                src='/linkedin.png'
                alt='linkedin'
                width={50}
                height={50}
              />
            </a>
          </div>
        </div>
        <div className={styles.teamCard}>
          <Image src='/yellow.png' alt='yellow' width={200} height={200} />
          <h1>Hanji Chen</h1>
          <h4>he likes to make it better.</h4>
          <div className={styles.logoRow}>
            <a
              href='https://github.com/whyWhyDev'
              target='_blank'
              rel='noreferrer'
            >
              <Image
                className={styles.logo}
                src='/github.png'
                alt='github'
                width={50}
                height={50}
              />
            </a>
            <a
              href='https://linkedin.com/in/hanjichen'
              target='_blank'
              rel='noreferrer'
            >
              <Image
                className={styles.logo}
                src='/linkedin.png'
                alt='linkedin'
                width={50}
                height={50}
              />
            </a>
          </div>
        </div>
        <div className={styles.teamCard}>
          <Image src='/green.png' alt='green' width={200} height={200} />
          <h1>Myo Aung</h1>
          <h4>he likes to make it work.</h4>
          <div className={styles.logoRow}>
            <a
              href='https://github.com/m-aung'
              target='_blank'
              rel='noreferrer'
            >
              <Image
                className={styles.logo}
                src='/github.png'
                alt='github'
                width={50}
                height={50}
              />
            </a>
            <a
              href='https://linkedin.com/in/myo-t-aung'
              target='_blank'
              rel='noreferrer'
            >
              <Image
                className={styles.logo}
                src='/linkedin.png'
                alt='linkedin'
                width={50}
                height={50}
              />
            </a>
          </div>
        </div>
        <div className={styles.teamCard}>
          <Image src='/purple.png' alt='purple' width={200} height={200} />
          <h1>Nick Stillman</h1>
          <h4>he likes to make it faster.</h4>
          <div className={styles.logoRow}>
            <a
              href='https://github.com/nickstillman'
              target='_blank'
              rel='noreferrer'
            >
              <Image
                className={styles.logo}
                src='/github.png'
                alt='github'
                width={50}
                height={50}
              />
            </a>
            <a
              href='https://nickstillman.com/'
              target='_blank'
              rel='noreferrer'
            >
              <Image
                className={styles.logo}
                src='/linkedin.png'
                alt='linkedin'
                width={50}
                height={50}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
