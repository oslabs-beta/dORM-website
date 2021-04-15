import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import DocsLayout from '../components/DocsLayout';
// import DefaultLayout from '../components/DefaultLayout';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  let returnComponent = (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );

  if (router.pathname.includes('/docs')) {
    returnComponent = (
      <Layout>
        <DocsLayout>
          <Component {...pageProps} />
        </DocsLayout>
      </Layout>
    );
  }

  return returnComponent;
}

// function MyApp({ Component, pageProps }) {
//   const InnerLayout = Component.Layout || DefaultLayout;
//   return (
//     <Layout>
//       <InnerLayout>
//         <Component {...pageProps} />
//       </InnerLayout>
//     </Layout>
//   );
// }

export default MyApp;
