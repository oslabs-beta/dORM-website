import Sidebar from '../../components/Sidebar';
import styles from '../../styles/Docs.module.scss';

export default function Docs() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <h1>Show document detail</h1>
    </div>
  );
}
