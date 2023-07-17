import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@chakra-ui/react"

import Typography from "../Typography"
import { useMediaQuery } from "../../hooks/useMediaQuery"

import Logo from "../../public/assets/logo_black.png"
import { RxHamburgerMenu } from "react-icons/rx"
import { XMarkIcon } from "@heroicons/react/24/outline"

const flexBetween = "flex items-center justify-between"
export const menu = [
  {text: "Główna", route: ""},
  {text: "O nas", route: "about"},
  {text: "Katalizatory", route: "catalysts"},
  {text: "Syntezy na zlecenie", route: "synthesis"},
  {text: "Sklep", route: "shop", mq: "sm"},
];

type Props = {
  isTopOfPage: Boolean
}

export const Navbar = ({ isTopOfPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
  const isAboveMediumScreens: boolean = useMediaQuery("(min-width: 1060px)")
  const navbarBackground = isTopOfPage ? "" : "drop-shadow bg-white"
  const topPosition = isTopOfPage ? "top-[50px]" : "top-0"

  const handleClick = () => setIsMenuToggled(!isMenuToggled)

  return (
    <nav className={`${navbarBackground} ${flexBetween} fixed ${topPosition} z-30 w-full
    py-3`}
    >
      <div className={`${flexBetween} mx-auto w-5/6 max-w-[1200px]`}>
        <div className={`${flexBetween} max-w-[196px] pr-6`}>
          <div>
            <Link href="/" className="cursor-pointer" passHref>
              <Image src={Logo} alt={"Logo"} />
            </Link>
          </div>
        </div>

        {
          isAboveMediumScreens ? (
            <div className={`${flexBetween} md:w-5/6`}>
              <Typography 
                className={`${flexBetween} gap-8`}
                variant="small"
                as="ul"
              >
                {
                  menu.map(item => {
                    if (!item.mq) {
                      return (
                        <div className={`flex flex-col before:content-[''] before:w-[135px]
                          before:h-[1px] before:bg-black before:hover:bg-blue hover:text-blue`}
                          key={item.text}
                        >
                          <Link href={`/${item.route}`} className="cursor-pointer">
                            {item.text}
                          </Link>
                        </div>
                      )
                    }
                  })
                }
              </Typography>

              <Link href={"/shop"} passHref>
                <Button
                  className="w-[125px] h-[42px]"
                  variant="primary"
                >
                  Sklep
                </Button>
              </Link>

              {/* SEARCH BTN HERE */}
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