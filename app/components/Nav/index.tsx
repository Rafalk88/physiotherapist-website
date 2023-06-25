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
    <NavigationMenu.Root
      orientation="horizontal"
      className="relative z-[1] flex justify-end"
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
                triggerStyles="hover:bg-white focus:shadow-black group flex
                select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2
                text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]"
                linkStyles="text-black hover:bg-white focus:shadow-black block
                select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none
                no-underline outline-none focus:shadow-[0_0_0_2px]"
              >
                {menuItem.title}
                {
                  menuItem.dropDown && (
                    <>
                      {' '}
                      <CaretDownIcon
                        className="relative top-[1px] transition-transform
                              duration-[250ms] ease-in group-data-[state=open]:-rotate-180"
                        aria-hidden
                      />
                    </>
                  )
                }
              </MyLink>
              {menuItem.dropDown && (
                <NavigationMenu.Content
                  className="data-[motion=from-start]:animate-enterFromLeft
                        data-[motion=from-end]:animate-enterFromRight
                        data-[motion=to-start]:animate-exitToLeft
                        data-[motion=to-end]:animate-exitToRight
                        absolute top-[48px] right-0 sm:w-auto
                        rounded-[6px] bg-white"
                >
                  <ul
                    className="list-none m-0 gap-x-[10px] px-[50px] py-[22px]"
                  >
                    {
                      dropdownMenu.map((item) => (
                        <ListItem
                          key={item.title}
                          aStyles="focus:shadow-[0_0_0_2px] focus:shadow-black
                            hover:bg-slate-500 block select-none rounded-[6px] p-3
                            text-[15px] leading-none no-underline outline-none
                            transition-colors"
                          title={item.title}
                          titleStyles="text-black mb-[5px] font-medium leading-[1.2]"
                          childrenStyles="text-black leading-[1.4]"
                          href={item.href}
                        >
                          {item.content}
                        </ListItem>
                      ))
                    }
                  </ul>
                </NavigationMenu.Content>
              )}
            </NavigationMenu.Item>
          ))
        }

        <NavigationMenu.Indicator className="top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden">
          <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}

export default Nav;
