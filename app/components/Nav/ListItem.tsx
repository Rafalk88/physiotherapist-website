import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

type ListItemProps = {
  className: string
  children: React.ReactNode
  title: string
  href: string
};

export const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(({
  className, children, title, ...props
}, forwardedRef) => (
  <li>
    <NavigationMenu.Link asChild>
      <a
        className="focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-mauve3
          block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline
          outline-none transition-colors"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        ref={forwardedRef}
      >
        <h3
          className="text-violet12 mb-[5px] font-medium leading-[1.2]"
        >
          {title}
        </h3>
        <p className="text-mauve11 leading-[1.4]">{children}</p>
      </a>
    </NavigationMenu.Link>
  </li>
));

export default ListItem;
