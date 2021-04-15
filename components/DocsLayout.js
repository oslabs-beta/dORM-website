import Sidebar from './Sidebar';
import styles from '../styles/Docs.module.scss';

const DocsLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Sidebar />
      {children}
    </div>
  );
};

export default DocsLayout;
