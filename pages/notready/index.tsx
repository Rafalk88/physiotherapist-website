import { useEffect } from 'react'
import Link from "next/link"
import { useRouter } from "next/router"

import Typography from "@/components/Typography"

const NotReady = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 6500)
  }, [router])

  return (
    <section className="w-full h-[calc(100vh-120px)] flex justify-center
      items-center gap-12"
    >
      <div className="w-5/6 mx-auto">
        <Typography
          variant="h2"
          as="h2"
        >
          Pracujemy nad tą treścią
        </Typography>
        <Typography
          className="py-6 font-regular"
          variant="h4"
          as="h4"
        >
          Tutaj wkrótce dostępne będą materiały. Pracujemy nad nimi najszybciej jak to
          mozliwe. Prosimy uzbrój się w cierpliwość i serdecznie zapraszamy do pozostałej
          części strony
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

export default NotReady