import Link from 'next/link';
import Accordion from './Accordion';
import SidebarLayout from './SidebarLayout';
import styles from '../styles/Accordion.module.scss';

const Sidebar = () => {
  return (
    <>
      <div>
        <SidebarLayout width={200} height={'80vh'}>
          <Accordion title='Introduction'>
            <Link href='/'>
              <div className={styles.accordionText}>Home</div>
            </Link>
            <Link href='/'>
              <div className={styles.accordionText}>Home</div>
            </Link>
            <Link href='/'>
              <div className={styles.accordionText}>Home</div>
            </Link>
            <Link href='/'>
              <div className={styles.accordionText}>Home</div>
            </Link>
            <Link href='/'>
              <div className={styles.accordionText}>Home</div>
            </Link>
          </Accordion>
          <Accordion title='Getting started'>
            <Link href='/'>
              <div className={styles.accordionText}>Home</div>
            </Link>
          </Accordion>
          <Accordion title='Query builder' />
          <Accordion title='Query examples' />
        </SidebarLayout>
      </div>
    </>
  );
};

export default Sidebar;
