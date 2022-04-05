import { ChakraProvider } from '@chakra-ui/provider'
import '../styles/globals.css'
import Head from 'next/head'
//import { DefaultSeo } from "next-seo";
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import customTheme from '../styles/customTheme'
function MyApp({ Component, pageProps }: AppProps) {
  return <ChakraProvider theme={customTheme}>
    <Head>
          <meta name="viewport" content="minimum-scale=1, maximum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover" />
        </Head>
   <Layout>
   <Component {...pageProps} />
   </Layout>
  </ChakraProvider>
}

export default MyApp
