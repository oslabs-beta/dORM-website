import React, { useState, useRef } from 'react';
import styles from '../styles/Accordion.module.scss';

function Accordion({ title, children }) {
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
        style={{
          maxHeight: `${setHeight}`,
          transition: 'max-height 0.6s ease',
        }}
        className={styles.accordionContent}
      >
        {/* <div className={styles.accordionText}>{children}</div> */}
        {children}
      </div>
    </div>
  );
}

export default Accordion;
