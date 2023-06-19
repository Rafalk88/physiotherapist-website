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
                        <ListItem className="" href="/" title="Kroczek Wojciech">
                          Tutaj będzie kontent
                        </ListItem>
                        <ListItem className="" href="/" title="Kroczek Edyta">
                          Tutaj będzie kontent
                        </ListItem>
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
