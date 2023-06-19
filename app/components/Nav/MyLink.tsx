import React from 'react';
import { usePathname } from 'next/navigation';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

type Props = {
  href: string
  children: React.ReactNode
  dropDown: boolean | undefined
};

function MyLink({
  href, children, dropDown, ...props
}: Props) {
  const path = usePathname();
  const isActive = path === href;

  if (dropDown) {
    return (
      <NavigationMenu.Trigger
        className="text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex
          select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2
          text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]"
      >
        {children}
      </NavigationMenu.Trigger>
    );
  }

  return (
    <NavigationMenu.Link
      className={`${isActive ? 'underline' : ''} flex hover:underline`}
      href={href}
      active={isActive}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </NavigationMenu.Link>
  );
}

export default MyLink;
