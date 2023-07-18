import React from 'react';
import {
  Html, Head, Main, NextScript,
} from 'next/document';

export const Document = () => (
  <Html lang="en">
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#2d89ef" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="keywords" content="Forwell, trening personalny, masaż, fizjoterapia" />
      <meta name="author" content="Rafał Kochanecki" />
      <meta
        name="description"
        content="Strona firmowa. Jesteśmy czynni od poniedziałku do soboty od 8:00 do 18:00"
      />
      <meta property="og:title" content="Forwell" />
      <meta
        property="og:description"
        content="Centrum fizjoterapii, treningu personalnego i masażu"
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
);

export default Document;
