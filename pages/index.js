import Head from 'next/head';
import Team from '../components/Team';

export default function Home() {
  return (
    <>
      <div className={'bodyContainer'}>
        <h1>THIS IS HOMEPAGE LANDING PAGE</h1>
        <Team />
      </div>
    </>
  );
}
