import React from 'react';
import './globals.css';
import { Inter } from 'next/font/google';

import Nav from './components/Nav';
import Footer from './components/Footer/Footer';
import TopComponent from './components/TopComponent';
import Logo from './components/Logo';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Forwell - Centrum fizjoterapii, treningu personalnego i masażu',
  description: 'W pełni wyposażony ośrodek zaprojektowany pod kątem efektywnej fizjoterapii. Twój powrót do zdrowia jest naszym priorytetem. Zadzwoń do naszego centrum fizjoterapii.',
  author: 'Rafał Kochanecki',
};

type Variant =
  | 'section'
  | 'div';

interface Props {
  variant: Variant
  children: React.ReactNode
  as?: React.ElementType
}

function Wrapper({
  variant, children, as,
}: Props) {
  const tags: Record<Variant, React.ElementType> = {
    section: 'section',
    div: 'div',
  };
  const Tag = as || tags[variant];

  return <Tag className="w-2/3 max-w-[1200px] mx-auto">{children}</Tag>;
}

Wrapper.defaultProps = {
  as: 'div',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-300`}>
        <Wrapper variant="section">
          <div className="flex justify-between items-center">
            <Logo />
            <div>
              <TopComponent />
              <Nav />
            </div>
          </div>
        </Wrapper>

        <Wrapper variant="div">
          {children}
        </Wrapper>

        <Wrapper variant="div">
          <Footer />
        </Wrapper>
      </body>
    </html>
  );
}
