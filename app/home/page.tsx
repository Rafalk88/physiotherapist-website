import React from 'react';

import Hero from './Hero';
import Offer from './Offer';
import Opinions from './Opinions';
import Contact from '../components/Contact';

type Variant =
  | 'section'
  | 'div'
  | 'nav'
  | 'main'
  | 'footer';

interface Props {
  variant: Variant
  children: React.ReactNode
  as?: React.ElementType
  className?: string
}
export const Container = ({
  variant, children, as = 'div', className = '',
}: Props) => {
  const tags: Record<Variant, React.ElementType> = {
    section: 'section',
    div: 'div',
    nav: 'nav',
    main: 'main',
    footer: 'footer',
  };
  const Tag = as || tags[variant];

  return (
    <Tag className={`max-w-screen min-h-screen ${className}`}>
      {children}
    </Tag>
  );
};

export const Home = () => (
  <Container
    variant="div"
    className="before:absolute before:top-[105px] before:left-0 before:bg-hero-lg
    before:bg-no-repeat before:bg-cover before:bg-right-top before:w-full before:h-[853px]
    before:z-[-1]"
  >
    <Hero />
    <Offer />
    <Opinions />
    <Contact />
  </Container>
);

export default Home;
