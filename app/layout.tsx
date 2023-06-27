import React from 'react';
import './globals.css';
import { Inter } from 'next/font/google';

import Nav from './components/Nav';
import Footer from './components/Footer/Footer';
import Logo from './components/Logo';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Forwell - Centrum fizjoterapii, treningu personalnego i masażu',
  description: 'W pełni wyposażony ośrodek zaprojektowany pod kątem efektywnej fizjoterapii. Twój powrót do zdrowia jest naszym priorytetem. Zadzwoń do naszego centrum fizjoterapii.',
  author: 'Rafał Kochanecki',
};

type Variant =
  | 'section'
  | 'div'
  | 'main'
  | 'footer';

interface Props {
  variant: Variant
  children: React.ReactNode
  as?: React.ElementType
  className?: string
}

const Wrapper = ({
  variant, children, as = 'div', className = '',
}: Props) => {
  const tags: Record<Variant, React.ElementType> = {
    section: 'section',
    div: 'div',
    main: 'main',
    footer: 'footer',
  };
  const Tag = as || tags[variant];

  return (
    <Tag className={`w-2/3 max-w-[1200px] mx-auto ${className}`}>
      {children}
    </Tag>
  );
};

export const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => (
  <html lang="en">
    <body className={`${inter.className}`}>
      <nav className="bg-dark-blue w-full fixed">
        <Wrapper
          className="flex justify-between items-center h-[105px]"
          variant="section"
          as="div"
        >
          <Logo />
          <Nav />
        </Wrapper>
      </nav>

      <Wrapper
        className="pt-[105px]"
        variant="section"
        as="main"
      >
        {children}
      </Wrapper>

      <footer className="bg-dark-blue w-full">
        <Wrapper variant="section" as="div">
          <Footer />
        </Wrapper>
      </footer>
    </body>
  </html>
);

export default RootLayout;
