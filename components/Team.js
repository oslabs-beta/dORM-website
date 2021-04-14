import Image from 'next/image';
import styles from '../styles/Team.module.scss';
import TeamCard from './TeamCard';

export default function Team() {
  return (
    <>
      <div className={styles.teamComp} id='teamComp'>
        <TeamCard
          name='Han Dump'
          profilePic='/red.png'
          quote='He likes to make it useful.'
          github='https://github.com/chaekmh'
          linkedin='https://linkedin.com/in/chaehan'
        />
        <TeamCard
          name='Hanji Chen'
          profilePic='/yellow.png'
          quote='He likes to make it better.'
          github='https://github.com/whyWhyDev'
          linkedin='https://linkedin.com/in/hanjichen'
        />
        <TeamCard
          name='Myo Aung'
          profilePic='/green.png'
          quote='He likes to make it work.'
          github='https://github.com/m-aung'
          linkedin='https://linkedin.com/in/myo-t-aung'
        />
        <TeamCard
          name='Nick Stillman'
          profilePic='/purple.png'
          quote='He likes to make it faster.'
          github='https://github.com/nickstillman'
          linkedin='https://nickstillman.com/'
        />
      </div>
    </>
  );
}
