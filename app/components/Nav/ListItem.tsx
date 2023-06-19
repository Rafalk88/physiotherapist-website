import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

type ListItemProps = {
  aStyles: string
  children: React.ReactNode
  title: string
  href: string
  titleStyles: string
  childrenStyles: string
};

export const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(({
  aStyles, titleStyles, childrenStyles, children, title, ...props
}, forwardedRef) => (
  <li>
    <NavigationMenu.Link asChild>
      <a
        className={aStyles}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        ref={forwardedRef}
      >
        <h3
          className={titleStyles}
        >
          {title}
        </h3>
        <p className={childrenStyles}>{children}</p>
      </a>
    </NavigationMenu.Link>
  </li>
));

export default ListItem;
