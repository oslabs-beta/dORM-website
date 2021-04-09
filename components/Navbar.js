import Link from 'next/link';

const NavBar = () => {
  return (
    <ul>
      <li>dORM</li>

      <li>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href='/docs'>
          <a>Documentation</a>
        </Link>
      </li>
      <li>
        <Link href='/team'>
          <a>Team</a>
        </Link>
      </li>
      <li>
        <Link href='https://github.com/oslabs-beta/dORM'>
          <a>Github</a>
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
