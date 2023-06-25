import React from 'react';

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
}
export function Container({
  variant, children, as,
}: Props) {
  const tags: Record<Variant, React.ElementType> = {
    section: 'section',
    div: 'div',
    nav: 'nav',
    main: 'main',
    footer: 'footer',
  };
  const Tag = as || tags[variant];

  return <Tag className="min-w-screen min-h-screen">{children}</Tag>;
}

Container.defaultProps = {
  as: 'div',
};

export default function Home() {
  return (
    <Container variant="main">
      Hello world
    </Container>
  );
}
