import Image from "next/image"
import { Button } from "@chakra-ui/react"
import Link from "next/link"

import Typography from "@/components/Typography"
import AboutUs from "./AboutUs"
import Contact from "./Contact"

import HeroImg from "@/public/assets/hero.png"

const Landing = () => {
  return (
    <section className="gap-16">
      <div
        className="w-full"
      >
        {/* HERO */}
        <section className="mx-auto w-5/6 max-w-[1200px]
          pt-20 md:pt-28 flex flex-col justify-between items-center xl:mb-20"
        >
          <div className="pb-12 md:pb-0 md:flex md:justify-between md:gap-14 ">
            <figure className="hidden md:py-0 md:flex md:justify-center md:items-center
              md:order-2 md:w-1/3 z-[-1]"
            >
              <Image
                src={HeroImg}
                alt="Hero-image"
                priority={true}
              />
            </figure>

            <article className="sm:w-3/4 pt-10 md:pb-20 md:w-2/3 flex flex-col
              justify-center"
            >
              {/* TEXT */}
              <Typography
                className="font-extrabold text-dark-grey pt-8 md:pt-0"
                variant="h1"
                as="h2"
              >
                Advanced materials for molecular design
              </Typography>
              <Typography
                className="pt-8 text-dark-grey"
                variant="body"
                as="p"
              >
                Związki chemiczne, które umieściliśmy w naszym katalogu to propozycje do wykorzystania
                w kolejnych syntezach chemicznych związanych szczególnie z projektami odkrywania leków,
                barwników fluorescencyjnych, katalizatorów heterogenicznych oraz związków zapachowych.
              </Typography>
              <Typography
                className="pt-9 text-dark-grey"
                variant="body"
                as="p"
              >
                Pełny katalog produktów do pobrania:
              </Typography>
              <Link href={"/notready"} passHref>
                <Button
                  className="w-full sm:w-[200px] h-[45px] mt-3 shadow-sm
                    duration-500 font-bold"
                  data-role="download"
                  variant="secondary"
                >
                  Pobierz
                </Button>
              </Link>
              
            </article>
          </div>
        </section>

        {/* CALL TO ACTION R&D */}
        <AboutUs />

        {/* CONTACT */}
        <Contact
          main={true}
        />
      </div>
    </section>
  )
}

export default Landing