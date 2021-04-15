import styles from '../styles/Team.module.scss';
import Image from 'next/image';

const TeamCard = ({ name, profilePic, quote, github, linkedin }) => {
  return (
    <div className={styles.teamCard}>
      <Image src={profilePic} alt='profilePic' width={350} height={350} />
      <h1>{name}</h1>
      <h4>{quote}</h4>
      <div className={styles.logoRow}>
        <a href={github} target='_blank' rel='noreferrer'>
          <Image
            className={styles.logo}
            src='/github.png'
            alt='github'
            width={40}
            height={40}
          />
        </a>
        <a href={linkedin} target='_blank' rel='noreferrer'>
          <Image
            className={styles.logo}
            src='/linkedin.png'
            alt='linkedin'
            width={40}
            height={40}
          />
        </a>
      </div>
    </div>
  );
};

export default TeamCard;
