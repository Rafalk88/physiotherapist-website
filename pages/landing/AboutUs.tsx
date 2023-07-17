import { Button } from "@chakra-ui/react"
import Link from "next/link"

import Typography from "@/components/Typography"
import ChemSlider from "./ChemSlider"

const AboutUs = () => {
  return (
    <section className="w-5/6 max-w-[1200px] mx-auto py-6 md:flex
      md:justify-around md:items-center"
    >
      <div className="sm:px-4 pb-12 mx-auto md:mx-0 md:pb-0">
        <ChemSlider />
      </div>
      <div className="md:w-1/3">
        <Typography
          className="font-extrabold text-dark-grey"
          variant="h1"
          as="h3"
        >
          Potencjał badawczy
        </Typography>
        <Typography
          className="py-8 text-dark-grey"
          variant="body"
          as="p"
        >
          Dzięki naszemu zaangażowaniu w projekty badawcze jakie inicjujemy, bądź w jakich
          partycypujemy, chcielibyśmy wykazać wkład w postęp naukowy w dziedzinie 
          chemii. 
        </Typography>

        <Typography
          className="pb-8 text-dark-grey"
          variant="body"
          as="p"
        >
          Wierzymy, że odpowiedni stopień automatyzacji oraz cyfryzacji tych procesów, 
          otworzy nowe możliwości na drodze do nowych struktur i przyczyni się do 
          odkrycia nieznanych dotąd obszarów przestrzeni chemicznej. Z tego względu testujemy
          i doskonalimy oryginalne rozwiązania od początku działalności.
        </Typography>

        <Link href={"/notready"} passHref>
          <Button
            className="w-full sm:w-[250px] h-[45px] cursor-pointer font-bold"
            data-role="information"
            variant="primary"
          >
            Zobacz nasze osiągnęcia
          </Button>
        </Link>
        
      </div>
    </section>
  )
}

export default AboutUs