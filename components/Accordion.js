import React, { useState, useRef } from 'react';
import Link from 'next/link';
import styles from '../styles/Accordion.module.css';
import '../styles/Accordion.module.css';

function Accordion({ title, info }) {
  const [setActive, setActiveState] = useState('');
  const [setHeight, setHeightState] = useState('0px');

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === '' ? 'active' : '');
    setHeightState(
      setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
    );
  }

  return (
    <div className={styles.accordionSection}>
      <button className={styles.accordion} onClick={toggleAccordion}>
        <p className={styles.accordionTitle}>{title}</p>
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className={styles.accordionContent}
      >
        <div>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </div>
        <div className={styles.accordionText}>
          <Link href='/docs'>
            <a>doc</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
