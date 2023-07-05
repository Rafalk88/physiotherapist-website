'use client';

import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { CaretDownIcon, Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

import Typography from '../../lib/Typography';
import MyLink from './MyLink';
import { ListItem } from './ListItem';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const menu = [
  { title: 'O Centrum', href: 'center' },
  { title: 'Pierwsza wizyta', href: 'first-visit' },
  { title: 'Oferta', href: 'offer' },
  { title: 'Zespół', href: 'team', dropDown: true },
  { title: 'Kontakt', href: 'contact' },
];

const dropdownMenu = [
  {
    title: 'Kroczek Wojciech', href: '/', content: 'Tutaj będzie kontent',
  },
  {
    title: 'Kroczek Edyta', href: '/', content: 'Tutaj będzie kontent',
  },
];

const Nav = () => {
  const isAboveMediumScreen:boolean = useMediaQuery('(min-width: 1024px)');
  const isSmall = useMediaQuery('(max-width: 1024px)');
  const [isMenuToggled, setIsMenuToggled] = React.useState<boolean>(false);
  const handleClick = () => {
    setIsMenuToggled(!isMenuToggled);
  };

  return (
    <NavigationMenu.Root
      orientation="horizontal"
      className="relative z-[1] flex justify-end"
    >
      <NavigationMenu.List
        className="center flex list-none p-1"
      >
        {
          isAboveMediumScreen ? (menu.map((menuItem) => (
            <NavigationMenu.Item key={menuItem.title}>
              <MyLink
                href={menuItem.href}
                dropDown={menuItem.dropDown}
                triggerStyles={`border-b border-transparent hover:border-b
                  hover:border-b-orange focus:shadow-black group flex
                  select-none items-center justify-between gap-[2px] px-3 py-2
                  text-[${isSmall ? '12px' : '15px'}] font-medium leading-none outline-none text-white
                  focus:shadow-[0_0_0_2px]`}
                linkStyles={`border-b border-transparent hover:border-b
                  hover:border-b-orange focus:shadow-black block select-none
                  px-3 py-2 text-[${isSmall ? '12px' : '15px'}] font-medium leading-none no-underline
                  outline-none focus:shadow-[0_0_0_2px] text-white`}
              >
                {menuItem.title}
                {
                  menuItem.dropDown && (
                    <>
                      {' '}
                      <CaretDownIcon
                        className="relative top-[1px] transition-transform
                          duration-[250ms] ease-in
                          group-data-[state=open]:-rotate-180"
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
                            hover:bg-slate-500 block select-none rounded-[6px]
                            p-3 text-[15px] leading-none no-underline
                            outline-none transition-colors"
                          title={item.title}
                          titleStyles="text-black mb-[5px] font-medium
                            leading-[1.2]"
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
          ))) : (
            <div className="md:w-5/6 flex justify-end">
              <button
                type="button"
                aria-label="hamburger menu"
                className="rounded-full p-2 text-dark-grey hover:text-black"
                onClick={handleClick}
              >
                <HamburgerMenuIcon className="h-10 w-10 text-white" />
              </button>
            </div>
          )
        }

        {
          !isAboveMediumScreen && isMenuToggled && (
            <section
              className="fixed right-0 top-0 w-full h-screen bg-white/25"
              onClick={handleClick}
              aria-hidden
            >
              <div
                className={`fixed right-0 top-0 w-[300px] h-screen
                text-dark-blue bg-orange
                  ${isMenuToggled ? 'data-[motion=from-end]:animate-enterFromRight' : 'data-[motion=to-end]:animate-exitToRight'}`}
                role="menubar"
                data-motion={isMenuToggled ? 'from-end' : 'to-end'}
              >
                <div className="flex justify-end p-12">
                  <button
                    type="button"
                    aria-label="close button"
                    onClick={handleClick}
                  >
                    <Cross1Icon className="w-6 h-6 cursor-pointer" />
                  </button>
                </div>

                <Typography
                  className="flex flex-col gap-8 ml-[33%] font-normal"
                  variant="h4"
                  as="div"
                >
                  {
                    menu.map((item) => (
                      <Link
                        key={item.title}
                        href={`/${item.href}`}
                        className="cursor-pointer"
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                      >
                        {item.title}
                      </Link>
                    ))
                  }
                </Typography>
              </div>
            </section>
          )
        }

        <NavigationMenu.Indicator className="top-full z-[1] flex h-[10px]
        items-end justify-center overflow-hidden"
        >
          <div className="relative top-[70%] h-[10px] w-[10px]
          rotate-[45deg] rounded-tl-[2px] bg-white"
          />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export default Nav;
