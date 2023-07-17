import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import Typography from "@/components/Typography"
import rightArrow from "@/public/assets/chevron_right.svg"
import itemsDataItem from './PartialOffer'


interface itemsDataItem {
  item: {
    image: StaticImageData
    title: string
    content: string
    link: string
    newOffer?: boolean
  }
}

const Item = ({ item }: itemsDataItem) => {
  const { image, title, content, link, newOffer } = item

  return (
    <article className="w-1/3 bg-white border rounded-[20px] drop-shadow-[0_1px_4px_rgba(16,48,97,0.35)]">
      <Image
        className="relative"
        src={image}
        alt={`${title}-image`}
        width={403}
        height={269}
      />
      {
        newOffer && (
          <div
            className="absolute top-[20px] left-[20px] w-[85px] h-[20px] rounded-full bg-pistachio flex
              justify-center items-center"
          >
            <Typography
              className="text-white"
              variant="body-small"
              as="span"
            >
              Nowość
            </Typography>
          </div>
        )
      }
      <div className="px-4 pb-5">
        <Typography
          className="py-5"
          variant="h4"
          as="h6"
        >
          {title}
        </Typography>
        <Typography
          className="text-base"
          variant="body-small"
          as="p"
        >
          {content}
        </Typography>
        <Link
          className="flex items-center mt-6 hover:underline"
          href={link}
        >
          <Typography
            className="pr-2 text-dark-brown"
            variant="body-small"
            as="p"
          >
            Dowiedz się więcej
          </Typography>
          <Image
            className="text-dark-brown w-[24px] h-[24px]"
            src={rightArrow}
            alt="right arrow"
          />
        </Link>
      </div>
      
    </article>
  )
}

export default Item
