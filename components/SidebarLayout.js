import React from 'react';
import styles from '../styles/SidebarLayout.module.css';

const SidebarLayout = ({ width, height, children }) => {
  const [xPosition, setX] = React.useState(-width);

  // const toggleMenu = () => {
  //   if (xPosition < 0) {
  //     setX(0);
  //   } else {
  //     setX(-width);
  //   }
  // };

  React.useEffect(() => {
    setX(0);
  }, []);

  return (
    <>
      <div
        className={styles.sideBar}
        style={{
          transform: `translatex(${xPosition}px)`,
          width: width,
          minHeight: height,
        }}
      >
        {/* <button
          onClick={() => toggleMenu()}
          className="toggle-menu"
          style={{
            transform: `translate(${width}px, 20vh)`
          }}
        ></button> */}
        <div className='content'>{children}</div>
      </div>
    </>
  );
};

export default SidebarLayout;
