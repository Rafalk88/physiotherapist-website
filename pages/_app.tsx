import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';

import Layout from '../components/Layout';
import Loader from '../components/Loader';
import { theme } from '../config/theme';
import './global.css';

export const App = ({ Component, pageProps }: AppProps) => {
  const [isTopOfPage, setIsTopOfPage] = React.useState<boolean>(true);
  const [loading, setLoading] = React.useState<boolean>(false);
  const router = useRouter();

  React.useEffect(() => {
    const handleStart = (url: string) => (
      url !== router.asPath
    ) && setLoading(true);
    const handleComplete = () => setTimeout(() => setLoading(false), 700);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  });

  React.useEffect(() => {
    const handleScroll = () => {
      if (!window.scrollY) {
        setIsTopOfPage(true);
      } else {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {
        loading && <Loader />
      }
      <ChakraProvider theme={theme}>
        <Layout isTopOfPage={isTopOfPage}>
          <Component {...pageProps} isTopOfPage={isTopOfPage} />
        </Layout>
      </ChakraProvider>
    </>
  );
};

export default App;
