'use client';

import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { CaretDownIcon } from '@radix-ui/react-icons';

import MyLink from './MyLink';
import { ListItem } from './ListItem';

const menu = [
  { title: 'O Centrum', href: '/center' },
  { title: 'Pierwsza wizyta', href: '/first-visit' },
  { title: 'Oferta', href: '/offer' },
  { title: 'Zespół', href: '/team', dropDown: true },
  { title: 'Kontakt', href: '/contact' },
];

const dropdownMenu = [
  {
    title: 'Kroczek Wojciech', href: '/', content: 'Tutaj będzie kontent',
  },
  {
    title: 'Kroczek Edyta', href: '/', content: 'Tutaj będzie kontent',
  },
];

function Nav() {
  return (
    <div className="relative w-2/3 max-w-[1200px] mx-auto">
      <NavigationMenu.Root
        orientation="horizontal"
        className="z-[1] flex justify-end"
      >
        <NavigationMenu.List
          className="center flex list-none p-1"
        >
          {
          menu.map((menuItem) => (
            <NavigationMenu.Item key={menuItem.title}>
              <MyLink
                href={menuItem.href}
                dropDown={menuItem.dropDown}
                triggerStyles="text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex
                select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2
                text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]"
                linkStyles="text-violet11 hover:bg-violet3 focus:shadow-violet7 block
                select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none
                no-underline outline-none focus:shadow-[0_0_0_2px]"
              >
                {menuItem.title}
                {menuItem.dropDown && (
                  <>
                    {' '}
                    <CaretDownIcon
                      className="relative top-[1px] transition-transform
                        duration-[250] ease-in group-data-[state=open]:-rotate-180"
                      aria-hidden
                    />
                    <NavigationMenu.Content
                      className="data-[motion=from-start]:animate-enterFromLeft
                        data-[motion=from-end]:animate-enterFromRight
                        data-[motion=to-start]:animate-exitToLeft
                        data-[motion=to-end]:animate-exitToRight absolute top-[30px]
                        left-0 sm:w-auto"
                    >
                      <ul
                        className="one list-none gap-x-[10px] px-[130px] py-[22px]
                          sm:w-[500px]"
                      >
                        {
                          dropdownMenu.map((item) => (
                            <ListItem
                              key={item.title}
                              aStyles="focus:shadow-[0_0_0_2px] focus:shadow-violet7
                                hover:bg-mauve3 block select-none rounded-[6px] p-3
                                text-[15px] leading-none no-underline outline-none transition-colors"
                              title={item.title}
                              titleStyles="text-violet12 mb-[5px] font-medium leading-[1.2]"
                              childrenStyles="text-mauve11 leading-[1.4]"
                              href={item.href}
                            >
                              {item.content}
                            </ListItem>
                          ))
                        }
                      </ul>
                    </NavigationMenu.Content>
                  </>
                )}
              </MyLink>
            </NavigationMenu.Item>
          ))
        }
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </div>
  );
}

export default Nav;
