import Link from "next/link"
import Image from "next/image"

const icons = [
  {
    name: "linkedin",
    link: "https://www.linkedin.com/company/siltim/",
  },
]

type Props = {
  className?: string
  width?: number
  height?: number
}

const SocialMediaIcons = ({ className, width, height }: Props) => {
  return (
    <section className={className}>
      {
        icons.map((icon) => {
          return (
            <Link
              key={icon.name}
              href={icon.link}
              className="hover:opacity-50 transition duration-500"
              target="_blank"
              rel="noreferrer"
              passHref
            >
              <Image 
                src={`/assets/${icon.name}.png`}
                alt={`${icon.name}-link`}
                width={width}
                height={height}
              />
            </Link>
          )
        })
      }
    </section>
  )
}

export default SocialMediaIcons