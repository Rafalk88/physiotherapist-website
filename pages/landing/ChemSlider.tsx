import Image from "next/image"
import { Splide, SplideSlide } from "@splidejs/react-splide"

import { useMediaQuery } from "../../hooks/useMediaQuery"

import Image1 from "@/public/assets/carousel_image_1.jpeg"
import Image2 from "@/public/assets/carousel_image_2.jpeg"
import Image3 from "@/public/assets/carousel_image_3.jpeg"

import "@splidejs/react-splide/css"

const ChemSlider = () => {
  const isAboveMediumScreens: boolean = useMediaQuery("(min-width: 767px)")
  const height = isAboveMediumScreens ? 430 : 200
  const arrows = isAboveMediumScreens ? true : false

  const options = {
    type: 'loop',
    gap: '1rem',
    autoplay: true,
    arrows: arrows,
    pauseOnHover: false,
    resetProgress: false,
    speed: 10000,
    width: `650px`,
    height: `${height}px`,
    perPage: 1,
    pagination: false,
  }

  return (
    <Splide 
      tag="section"
      aria-label="Chemistry slider"
      options={options}
      className="mx-auto"
    >
      <SplideSlide>
        <Image
          src={Image1}
          alt="Splide-image-1"
          width={650}
          height={height}
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src={Image2}
          alt="Splide-image-2"
          width={650}
          height={height}
        />
      </SplideSlide>
      <SplideSlide>
        <Image
          src={Image3}
          alt="Splide-image-3"
          width={650}
          height={height}
        />
      </SplideSlide>
    </Splide>
  )
}

export default ChemSlider
