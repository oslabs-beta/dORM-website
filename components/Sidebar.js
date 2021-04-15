import Link from 'next/link';
import Accordion from './Accordion';
import SidebarLayout from './SidebarLayout';
import styles from '../styles/Accordion.module.scss';

const Sidebar = () => {
  return (
    <>
      <div>
        <SidebarLayout width={300} height={'95vh'}>
          <Accordion title='Getting Started'>
            <Link href='/docs/getting-started'>
              <div className={styles.accordionText}>Introduction</div>
            </Link>
          </Accordion>
          <Accordion title='Query Builder'>
            <Link href='/docs/getting-started'>
              <div className={styles.accordionText}>Insert</div>
            </Link>
            <Link href='/docs/getting-started'>
              <div className={styles.accordionText}>Select</div>
            </Link>
            <Link href='/docs/query-builder'>
              <div className={styles.accordionText}>Update</div>
            </Link>
            <Link href='/docs/query-builder'>
              <div className={styles.accordionText}>Delete</div>
            </Link>
            <Link href='/docs/query-builder'>
              <div className={styles.accordionText}>Joins</div>
            </Link>
            <Link href='/docs/query-builder'>
              <div className={styles.accordionText}>Parameterizing Queries</div>
            </Link>
            <Link href='/docs/query-builder'>
              <div className={styles.accordionText}>Raw</div>
            </Link>
            <Link href='/docs/query-builder'>
              <div className={styles.accordionText}>toString and toObject</div>
            </Link>
          </Accordion>
          <Accordion title='Models'>
            <Link href='/docs/model'>
              <div className={styles.accordionText}>Under Construction</div>
            </Link>
          </Accordion>
          <Accordion title='Query examples' />
        </SidebarLayout>
      </div>
    </>
  );
};

export default Sidebar;
