import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>    
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="keywords" content="Siltim, benzen, reakcja chemiczna, chemia, labolatorium"></meta>
        <meta name="author" content="Rafał Kochanecki"></meta>
        <meta
          name="description"
          content="Strona firmy chemicznej wraz ze sklepem z materiami. Jesteśmy czynni od poniedziałku do soboty od 8:00 do 18:00"
        />
        <meta property="og:title" content="Siltim sp. z o.o." />
        <meta
          property="og:description"
          content="Advanced materials for molecular design"
        />
        <meta
          property="og:image"
          content="../public/assets/logo_black.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
