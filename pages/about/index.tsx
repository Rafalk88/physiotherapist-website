import Head from "next/head"

import Typography from "@/components/Typography"

const index = () => {
  return (
    <>
      <Head>
        <title>
          Siltim Sp. z o.o. | O nas
        </title>
      </Head>
      <section className="w-5/6 max-w-[1200px] sm:h-[calc(100vh-80px)] mx-auto
        flex flex-col justify-center items-center pt-40 sm:pt-0"
      >
        <Typography 
          className="flex justify-center"
          variant="h3"
          as="h3"
        >
          Nasz misja
        </Typography>
        <Typography
          className="py-6"
          variant="body"
          as="p"
        >
          Założona w 2021 roku firma Siltim jest start-upową firmą chemiczną
          napędzaną innowacjami naukowymi. Naszą misją jest rozwój nowych
          technologii, ze szczególnym uwzględnieniem projektowania i produkcji
          zaawansowanych materiałów chemicznych. Zaczynając od podstawowych
          pomysłów opracujemy technologię produkcji chemikaliów na pożądaną
          skalę. Zapewniamy rozpoznanie laboratoriów, projektowanie metod
          syntezy, projektowanie procesów, schematy orurowania i 
          oprzyrządowania, modele 3D oraz dokumentację fazy wykonawczej.
          Zainteresowania naukowe: projektowanie leków, barwniki i materiały
          dla elektroniki organicznej, całkowita synteza chemiczna.
        </Typography>
      </section>
    </>
    
  )
}

export default index