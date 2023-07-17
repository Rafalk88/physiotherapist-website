import Link from "next/link"
import Image from "next/image"

import Logo from "../../public/assets/logo_white.png"
import SocialMediaIcons from "@/components/SocialMediaIcons"
import Typography from "../Typography"
import { menu } from "../Navbar"

const Footer = () => {
  return (
    <footer className="w-full bg-blue">
      <div className="w-5/6 max-w-[1200px] mx-auto md:flex pt-12 text-white">
        <div className="w-full">
          <div className="sm:flex sm:justify-between">
            <div className="max-w-[135px] pr-4 mb-4">
              <Link href="/" className="cursor-pointer" passHref>
                <Image src={Logo} alt={"Logo"} />
              </Link>
            </div>

            <Typography
              className="pr-4"
              variant="body"
              as="div"
            >
              <p>Siltim Sp. z o.o.</p>
              <p>Św. Jana 11/4</p>
              <p>40-012 Katowice, Polska</p>
              <p>KRS: 0000934584</p>
              <p>VAT EU: PL 6343003739</p>
            </Typography>

            <div className="sm:flex sm:justify-between w-2/3">
              <article className="flex flex-col py-6 sm:py-0 md:py-0">
                {
                  menu.map(item => {
                    return (
                      <Typography
                        variant="body"
                        key={item.text}
                      >
                        <Link
                          href={`/${item.route}`}
                          className="list-none cursor-pointer hover:text-light-grey hover:underline"
                        >
                          {item.text}
                        </Link>
                      </Typography>
                      
                    )
                  })
                }
              </article>

              <SocialMediaIcons className="flex gap-4 hover:text-light-grey" width={48} height={48} />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between md:items-center py-6">
            <Typography
              className="md:flex gap-2 pb-4 sm:pb-0"
              variant="body"
              as="div"
            >
              <Link href="/policy" className="block cursor-pointer text-center hover:text-light-grey hover:underline">
                Polityka prywatności
              </Link>
            </Typography>
            <Typography 
              className="text-center pb-4 sm:pb-0"
              variant="body"
              as="p"
            >
              &copy; {new Date().getFullYear()} Siltim. Wszelkie prawa zastrzeżone
            </Typography>
            <Typography 
              className="gap-2 flex sm:flex-col md:flex-row justify-center"
              variant="body"
              as="div"
            >
              <p>Webmaster</p>
              <Link
                href="https://www.linkedin.com/in/rafalkochanecki/"
                className="cursor-pointer hover:text-light-grey hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Rafał Kochanecki
              </Link>
            </Typography> 
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer