import Image from "next/image"
import { useToast } from "@chakra-ui/react"
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard"

import SocialMediaIcons from "../SocialMediaIcons"
import SecuredLetter from "@/public/assets/SecuredLetter.svg"
import PlaceMarker from "@/public/assets/PlaceMarker.svg"

const textStyles = "text-white ml-2 cursor-pointer"
const officialEmail = "office@siltim.com"
const address = "Św. Jana 11/4, 40-012 Katowice, Polska"

const TopDiv = () => {
  const toast = useToast()
  const [, copy] = useCopyToClipboard()

  const copyToClipBoard = (text: string) => {
    copy(text)
    toast({
      title: "Skopiowano do schowka.",
      status: "info",
      duration: 2000,
      position: "top",
    })
  }

  return (
    <section className="w-full h-[40px] bg-blue">
      <div className="mx-auto w-5/6 max-w-[1200px] h-full flex justify-between 
        items-center"
      >
        <div className="flex">
          <Image
            className="ml-2"
            src={SecuredLetter}
            alt={"Letter-icon"}
            width={24}
            height={24}
          />
          <p
            className={textStyles}
            onClick={() => copyToClipBoard(officialEmail)}
          >
            {officialEmail}
          </p>
          <Image
            className="ml-2"
            src={PlaceMarker}
            alt={"Location-icon"}
            width={24}
            height={24}
          />
          <p
            className={textStyles}
            onClick={() => copyToClipBoard(address)}
          >
            {address}
          </p>
        </div>
        
        <SocialMediaIcons width={23} height={23} />
      </div>
    </section>
  )
}

export default TopDiv