import Head from "next/head"

import Typography from "@/components/Typography"

const index = () => {
  return (
    <>
      <Head>
        <title>
          Siltim Sp. z o.o. | Katalizatory
        </title>
      </Head>
      <section className="w-5/6 max-w-[1200px] md:min-h-[calc(100vh-80px)] mx-auto
        flex flex-col justify-center items-center pt-40 pb-12">
        <Typography
          className="flex justify-center"
          variant="h3"
          as="h3"
        >
          Katalizatory
        </Typography>
        <Typography
          className="pt-6"
          variant="body"
          as="p"
        >
          Oferujemy heterogeniczne katalizatory, użyteczne w syntezie organicznej
          przy tworzeniu wiązań węgiel-węgiel. Katalizatory są aktywne w
          sub-stechiometrycznych ilościach (podać TON/TOF   dla znanych układów)
          i otrzymujemy je z doskonałą powtarzalnością. W stałej ofercie dostępnych
          jest kilka wariantów. Na zlecenie produkowane są inne układy katalityczne,
          dostępne w ilościach   miligram - kilogram. Możliwa jest produkcja układów
          o zróżnicowanej i dedykowanej morfologii,  zawierających jeden metal lub
          kilka. Możemy także przygotować bibliotekę o   ustalonej
          konfiguracji - rodzaje metali, ich dystrybucja - i pośrednio  stężenie,
          rozmiar ziaren, rodzaj podłoża, rozkład dyspersji -  monodyspersyjność.
          Katalizatory zawierają metale ciężkie, nieszlachetne, szlachetne i ziem
          rzadkich. Ze względu na badawczo-rozwojowy charakter naszego laboratorium,
          możemy   zapewnić charakterystykę materiałów jakie otrzymujemy.
          Przykładowo analizy  SEM, TEM, FTIR i XRD.
        </Typography>

        <Typography
          variant="body"
          as="p"
        >
          Oferujemy organokatalizatory, związki koordynacyjne, będące połączeniem
          metali i ligandów organicznych. Związki te przygotowujemy w ścisłej
          współpracy z klientami z uwagi na specyficzne wymagania co do budowy i
          charakterystyki funkcjonalnej materiału.
        </Typography>

        <Typography
          className="py-6"
          variant="h3"
          as="h3"
        >
          Technologie wodorowe
        </Typography>
        <Typography
          variant="body"
          as="p"
        >
          Nasze osiągnięcia w obszarze materiałów funkcjonalnych skupiają się także
          w szeroko pojętej dziedzinie technologii wodorowych. Obecnie testujemy
          katalizator dedykowany do krakingu amoniaku. Pomysł wykorzystania amoniaku
          jako źródła wodoru ma długą historię. Niewątpliwie atrakcyjna jest idea
          wykorzystania gazów powstających w wyniku rozkładu cząsteczki NH3, do
          bezpośredniego zasilania ogniw paliwowych. Katalizator, który testujemy ma
          dodatni bilans energetyczny ze względu na jego aktywność w temperaturach
          poniżej 450 *C - jaki ten bilans w liczbach, i wykazuje ponad 99,9%
          efektywność działania w trakcie wielodniowych testów laboratoryjnych.
          Zaletą jest niski koszt wytworzenia oraz skalowalna technologia produkcji.
          Więcej informacji udzielamy na życzenie. Przygotowujemy wniosek grantowy w
          konkursie Europejskim.... na dalszy rozwój tego materiału, ponieważ
          dostrzegamy możliwość dalszego obniżania temperatury efektywnego rozkładu
          amoniaku. Planujemy także demonstrator dla branży automotive.
        </Typography>
      </section>
    </>
    
  )
}

export default index