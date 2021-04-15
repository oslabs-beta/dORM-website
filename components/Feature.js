import styles from '../styles/Main.module.scss';

const Feature = () => {
  return (
    <div className={styles.featureContainer}>
      <h1>FEATURES</h1>
      <div className={styles.featureSubContainer}>
        <h2>Securely run in Deno</h2>
        <h2>Promise based</h2>
        <h2>Typescript syntax</h2>
      </div>
      <div className={styles.featureSubContainer2}>
        <h2>Readable data model</h2>
        <h2>Protected from SQL injection</h2>
      </div>
    </div>
  );
};

export default Feature;
