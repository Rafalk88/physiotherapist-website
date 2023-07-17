import { useState, useEffect } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import Layout from '../components/Layout'
import Loader from '../components/Loader'

import { theme } from '../config/theme'
import './global.css'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)
  const [loading, setLoading] = useState<boolean>(false)
  const router = useRouter()

  useEffect(() => {
    const handleStart = (url: string) => (url !== router.asPath) && setLoading(true);
    const handleComplete = () => setTimeout(() => setLoading(false), 700);

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  })

  useEffect(() =>{
    const handleScroll = () => {
      if (!window.scrollY) {
        setIsTopOfPage(true)
      } else {
        setIsTopOfPage(false)
      }
    }
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
  )
}
