import Link from 'next/link';
import Accordion from './Accordion';
import SidebarLayout from './SidebarLayout';

const Sidebar = () => {
  const testing = (
    <Link href='/'>
      <a>Home</a>
    </Link>
  );
  // const test = { test: testing};
  return (
    <>
      <div>
        <SidebarLayout width={300} height={'100vh'}>
          <Accordion title='hanDump' info='dumpdump' />
          <Accordion title='hanDump' info='dumpdump' />
          <Accordion title='hanDump' info='dumpdump' />
          <Accordion title='hanDump' info='dumpdump' />
        </SidebarLayout>
      </div>
    </>
  );
};

export default Sidebar;
