import styles from '../styles/Navbar.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const NavBar = () => {
  return (
    <>
      <div className={styles.nav}>
        <Link href='/'>
          <div className={styles.navMainLogo}>
            <div
              style={{
                position: 'relative',
                width: '100px',
                height: '56px',
                cursor: 'pointer',
              }}
            >
              <Image
                src='/dorm.png'
                alt='dorm'
                layout='fill'
                objectFit='contain'
              />
            </div>
            <h1>dORM</h1>
          </div>
        </Link>

        <ul className={styles.navContainer}>
          <li>
            <Link href='/'>
              <div>Home</div>
            </Link>
          </li>

          <li>
            <Link href='/#teamComp'>
              <div>Team</div>
            </Link>
          </li>
          <li>
            <Link href='/docs'>
              <div>Documentation</div>
            </Link>
          </li>
          <li>
            <div>
              <a
                href='https://deno.land/x/dorm'
                target='_blank'
                rel='noreferrer'
              >
                Deno.land
              </a>
            </div>
          </li>
          <li>
            <div>
              <a
                href='https://github.com/oslabs-beta/dORM'
                target='_blank'
                rel='noreferrer'
              >
                ⭐ Star
              </a>
            </div>
          </li>
          <li>
            <div>
              <a
                href='https://github.com/oslabs-beta/dORM'
                target='_blank'
                rel='noreferrer'
              >
                Github
              </a>
            </div>
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
