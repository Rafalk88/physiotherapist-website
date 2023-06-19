import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

type Props = {
  href: string
  children: React.ReactNode
  dropDown: boolean | undefined
  triggerStyles: string
  linkStyles: string
};

function MyLink({
  href, children, dropDown, triggerStyles, linkStyles, ...props
}: Props) {
  if (dropDown) {
    return (
      <NavigationMenu.Trigger
        className={triggerStyles}
      >
        {children}
      </NavigationMenu.Trigger>
    );
  }

  return (
    <NavigationMenu.Link
      className={linkStyles}
      href={href}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </NavigationMenu.Link>
  );
}

export default MyLink;
