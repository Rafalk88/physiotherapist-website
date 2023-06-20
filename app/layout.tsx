import React from 'react';
import './globals.css';
import { Inter } from 'next/font/google';

import Nav from './components/Nav';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Forwell - Centrum fizjoterapii, treningu personalnego i masażu',
  description: 'W pełni wyposażony ośrodek zaprojektowany pod kątem efektywnej fizjoterapii. Twój powrót do zdrowia jest naszym priorytetem. Zadzwoń do naszego centrum fizjoterapii.',
  author: 'Rafał Kochanecki',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-300`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
