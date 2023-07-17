import Head from "next/head"

import Typography from "@/components/Typography"

const index = () => {
  return (
    <>
      <Head>
        <title>
          Siltim Sp. z o.o. | Syntezy
        </title>
      </Head>
      <section className="w-5/6 max-w-[1200px] sm:min-h-[calc(100vh-80px)] mx-auto
        flex flex-col justify-center items-center pt-40"
      >
        <Typography
          className="flex justify-center"
          variant="h3"
          as="h3"
        >
          Syntezy na zlecenie
        </Typography>
        <Typography
          className="py-6"
          variant="h5"
          as="h5"
        >
          Zastosowania laboratoryjne
        </Typography>
        <Typography
          className="py-6"
          variant="body"
          as="p"
        >
          Pobieramy honorarium tylko w przypadku zrealizowanych syntez
          związków chemicznych i ponosimy koszty opracowania metod z tym
          związanych. Ponieważ otrzymywanie nieopisanych dotąd związków
          może stwarzać konieczność prowadzenia długotrwałych prac
          badawczych, proponujemy w takich przypadkach porozumienie
          polegające na deklaracji klienta o intencji zakupu w umówionym
          przedziale czasowym. W trakcie tego okresu pozostajemy w
          kontakcie i informujemy o postępach prac, szacując przy tym
          datę dostawy.
        </Typography>

        <Typography
          className="py-6"
          variant="h5"
          as="h5"
        >
          Zastosowania przemysłowe
        </Typography>
        <Typography
          className="py-6"
          variant="body"
          as="p"
        >
          Zapraszamy do współpracy w zakresie przygotowania i testowania
          syntez pilotażowych z wykorzystaniem aparatury ze stali
          nierdzewnej o nominalnej objętości reaktora 50 L. Podejmujemy
          się zadań w zakresie przygotowania oryginalnej procesowej
          dokumentacji P&ID. Dysponujemy własnymi rozwiązaniami w
          zakresie aparatury na cele budowy prototypów i demonstratorów. 
        </Typography>
      </section>
    </>
    
  )
}

export default index