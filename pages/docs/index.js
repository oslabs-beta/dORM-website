import Sidebar from '../../components/Sidebar';
import styles from '../../styles/Docs.module.scss';
import Image from 'next/image';
// import DocsLayout from '../../components/DocsLayout';

function Docs() {
  return (
    <div className={styles.container}>
      <div className={styles.docContents}>
        <h1>UNDER CONSTRUCTION 🚧</h1>
        <Image src='/ucp.png' alt='ucp' width={700} height={394} />
      </div>
    </div>
  );
}

// Docs.Layout = DocsLayout;

export default Docs;
