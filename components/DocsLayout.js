import Sidebar from './Sidebar';
import styles from '../styles/Docs.module.scss';

const DocsLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.docContents}>{children}</div>
    </div>
  );
};

export default DocsLayout;
