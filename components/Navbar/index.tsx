import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import Typography from "../Typography"
import { useMediaQuery } from "../../hooks/useMediaQuery"

import Logo from "../../public/assets/logo.svg"
import { RxHamburgerMenu } from "react-icons/rx"
import { XMarkIcon } from "@heroicons/react/24/outline"

const flexBetween = "flex items-center justify-between"
export const menu = [
  {text: "O centrum", route: ""},
  {text: "Pierwsza wizyta", route: "first-visit"},
  {text: "Oferta", route: "offer"},
  {text: "Zespół", route: "team"},
  {text: "Kontakt", route: "contact"},
];

type Props = {
  isTopOfPage: Boolean
}

export const Navbar = ({ isTopOfPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
  const isAboveMediumScreens: boolean = useMediaQuery("(min-width: 1060px)")
  const navbarBackground = isTopOfPage ? "" : "drop-shadow-md"

  const handleClick = () => setIsMenuToggled(!isMenuToggled)

  return (
    <nav className={`${navbarBackground} ${flexBetween} fixed z-30 w-full
    h-[105px] py-3 bg-light-brown`}
    >
      <div className={`${flexBetween} mx-auto w-5/6 max-w-[1200px]`}>
        <div>
          <Link href="/" className={`${flexBetween} cursor-pointer`} passHref>
            <Image src={Logo} alt={"Logo"} className="mr-4" />
          </Link>
        </div>

        {
          isAboveMediumScreens ? (
            <div>
              <Typography 
                className={`${flexBetween} gap-8 font-bold`}
                variant="body"
                as="ul"
              >
                {
                  menu.map(item => {
                      return (
                        <div className={`flex flex-col`}
                          key={item.text}
                        >
                          <Link href={`/${item.route}`} className="cursor-pointer text-dark-brown hover:text-white
                            transform duration-500 ease-in-out">
                            {item.text}
                          </Link>
                        </div>
                      )
                    })
                }
              </Typography>
            </div>
          ) : (
            <div className="w-5/6 flex justify-end">
              <button
                  className="rounded-full p-2 text-dark-grey hover:text-black"
                  onClick={handleClick}
                >
                  <RxHamburgerMenu className="h-10 w-10" />
                </button>
            </div>
          )
        }

        {
          !isAboveMediumScreens && isMenuToggled && (
            <section className="fixed right-0 top-0 w-full h-screen bg-black/25" onClick={handleClick}>
              <div className="fixed right-0 top-0 w-[300px] h-screen text-dark-grey bg-light-grey">
                <div className="flex justify-end p-12">
                  <button onClick={handleClick}>
                    <XMarkIcon className="w-6 h-6 cursor-pointer" />
                  </button>
                </div>

                <Typography
                  className="flex flex-col gap-8 ml-[33%] font-normal"
                  variant="h4"
                  as="div"
                >
                  {
                    menu.map(item => {
                      return (
                        <Link 
                          key={item.text}
                          href={`/${item.route}`}
                          className="cursor-pointer hover:text-black hover:underline"
                          onClick={() => setIsMenuToggled(!isMenuToggled)}
                        >
                          {item.text}
                        </Link>
                      )
                    })
                  }
                </Typography>
              </div>
            </section>
          )
        }
      </div>
    </nav>
  )
}

export default Navbar