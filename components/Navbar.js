import styles from '../styles/Navbar.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const NavBar = () => {
  return (
    <>
      <div className={styles.navLogo}>
        <h1>dORM</h1>
        <Image src='/dorm.png' alt='dorm' width={100} height={55} />
        <ul className={styles.navContainer}>
          <li>
            <Link href='/'>
              <div className={styles.navIcon}>Home</div>
            </Link>
          </li>
          <li>
            <Link href='/docs'>
              <div className={styles.navIcon}>Documentation</div>
            </Link>
          </li>
          <li>
            <Link href='/team'>
              <div className={styles.navIcon}>Team</div>
            </Link>
          </li>
          <li>
            <Link href='https://github.com/oslabs-beta/dORM'>
              <div className={styles.navIcon}>Github</div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

// const Navbar = ({ items }) => {
//   const [focused, setFocused] = useState(0);
//   function clicked(e) {
//     setFocused(e.CurrentTarget.id);
//   }
//   return (
//     <div>
//       <ul className={}>
//         {items.map(function (m, index) {
//           let style = '';
//           if (focused == index) {
//             style = 'focused';
//           }
//           // Notice the use of the bind() method. It makes the
//           // index available to the clicked function:
//           return (
//             <li className={style} id={index} onClick={clicked}>
//               {m}
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

export default NavBar;
