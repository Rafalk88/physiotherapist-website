import { useEffect } from 'react'
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"

import Typography from "@/components/Typography"

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }, [router])

  return (
    <section className="w-full h-[calc(100vh-120px)] flex justify-center
      items-center gap-12"
    >
      <figure>
        <Image 
          src="/assets/monitor.png"
          alt="Error-404-icon"
          width={300}
          height={400}
        />
      </figure>

      <div>
        <Typography
          variant="h2"
          as="h2"
        >
          Oooops... Coś poszło nie tak
        </Typography>
        <Typography
          className="py-6 font-regular"
          variant="h4"
          as="h4"
        >
          Strona - której szukasz, nie istnieje
        </Typography>
        <Typography
          variant="body"
          as="p"
        >
          Powróć do <Link href="/" className="underline text-blue-500">Strony Głównej</Link>
        </Typography>
      </div>
      
    </section>
  )
}

export default NotFound