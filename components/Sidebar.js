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
            <Link href='/docs/getting-started/#introduction'>
              <div className={styles.accordionText}>Introduction</div>
            </Link>
            <Link href='/docs/getting-started/#getting-started'>
              <div className={styles.accordionText}>Getting Started</div>
            </Link>
          </Accordion>

          <Accordion title='Query Builder'>
            <Link href='/docs/query-builder/#insert'>
              <div className={styles.accordionText}>Insert</div>
            </Link>
            <Link href='/docs/query-builder/#select'>
              <div className={styles.accordionText}>Select</div>
            </Link>
            <Link href='/docs/query-builder/#update'>
              <div className={styles.accordionText}>Update</div>
            </Link>
            <Link href='/docs/query-builder/#delete'>
              <div className={styles.accordionText}>Delete</div>
            </Link>
            <Link href='/docs/query-builder/#joins'>
              <div className={styles.accordionText}>Joins</div>
            </Link>
            <Link href='/docs/query-builder/#parameterized-queries'>
              <div className={styles.accordionText}>Parameterizing Queries</div>
            </Link>
            <Link href='/docs/query-builder/#toString-toObject'>
              <div className={styles.accordionText}>toString and toObject</div>
            </Link>
            <Link href='/docs/query-builder/#raw'>
              <div className={styles.accordionText}>Raw</div>
            </Link>
          </Accordion>
          <Accordion title='Models'>
            <Link href='/docs/model/#model'>
              <div className={styles.accordionText}>Table Models</div>
            </Link>
          </Accordion>
        </SidebarLayout>
      </div>
    </>
  );
};

export default Sidebar;
