import Link from "next/link"

import Typography from "@/components/Typography"

const liDecimalStyle = "list-decimal font-normal pt-2"
const liLowerStyle = "list-lower font-normal"

const Policy = () => {
  return (
    <section className="w-full flex justify-center
      items-center gap-12"
    >
      <div className="w-5/6 max-w-[1200px] mx-auto py-32">
        <Typography
          className="text-center pb-6"
          variant="h2"
          as="h2"
        >
          Polityka prywatności strony internetowej
        </Typography>
        <Typography
          className="text-center pb-10"
          variant="h2"
          as="h2"
        >
          siltim.com
        </Typography>
        <ol>
          <Typography
            className={`${liDecimalStyle} pb-8`}
            variant="h4"
            as="li"
          >
            POSTANOWIENIA OGÓLNE
            <ol className="pl-6 pt-2">
              <Typography
                className={`${liDecimalStyle} pb-2`}
                variant="h5"
                as="li"
              >
                Administratorem danych osobowych zbieranych za pośrednictwem strony internetowej&nbsp;
                <span className="font-bold">siltim.com</span>&nbsp;jest <span className="font-bold">Siltim Sp. z o.o.</span> 
                &nbsp;wpisana do rejestru przedsiębiorców przez właściwy sąd pod numerem KRS:&nbsp;
                <span className="font-bold">0000934584</span>, kapitał zakładowy: 5304,00 PLN, miejsce
                wykonywania działalności: ŚW. Jana 11/4, 40-012 Katowice, adres do doręczeń: ŚW. Jana 11/4,
                40-012 Katowice, NIP: 634-300-37-39, REGON: 520523333, adres poczty elektronicznej e-mail:
                office@siltim.com, zwany dalej &quot;Administratorem&quot;.
              </Typography>
              <Typography
                className={`${liDecimalStyle}`}
                variant="h5"
                as="li"
              >
                Dane osobowe zbierane przez Administratora za pośrednictwem strony internetowej są przetwarzane zgodnie z
                Rozporządzeniem Parlamentu Europejskiego i Rady UE 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony
                osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych
                oraz uchylenia dyrektywy 95/46/WE - ogólne rozporządzenie o ochronie danych, zwane dalej RODO oraz ustawą
                o ochronie danych osobowych z dnia 10 maja 2018 r.
              </Typography>
            </ol>
          </Typography>
          
          <Typography
            className={liDecimalStyle}
            variant="h4"
            as="li"
          >
            RODZAJ PRZETWARZANYCH DANYCH OSOBOWYCH, CEL I ZAKRES ZBIERANIA DANYCH
            <ol className="pl-6 pt-2">
              <Typography
                className={liDecimalStyle}
                variant="h5"
                as="li"
              >
                CEL PRZETWARZANIA I PODSTAWA PRAWNA. Administrator przetwarza dane osobowe za pośrednictwem strony&nbsp;
                <span className="font-bold">siltim.com</span> w przypadku:
                <ol className="pl-6 pt-2">
                  <Typography
                    className={liLowerStyle}
                    variant="h5"
                    as="li"
                  >
                    skorzystania przez użytkownika z formularza kontaktowego. Dane osobowe są przetwarzane na podstawie
                    art. 6 ust. 1 lit. f) RODO jako prawnie usprawiedliwiony interes Administratora.
                  </Typography>
                </ol>
              </Typography>
              <Typography
                className={liDecimalStyle}
                variant="h5"
                as="li"
              >
                RODZAJ PRZETWARZANYCH DANYCH OSOBOWYCH. Administrator przetwarza następujące kategorie danych osobowych
                użytkownika:
                <ol className="pl-6 pt-2">
                  <Typography
                    className={`${liLowerStyle}`}
                    variant="h5"
                    as="li"
                  >
                    Imię i nazwisko,
                  </Typography>
                  <Typography
                    className={liLowerStyle}
                    variant="h5"
                    as="li"
                  >
                    Adres e-mail,
                  </Typography>
                </ol>
              </Typography>
              <Typography
                className={liDecimalStyle}
                variant="h5"
                as="li"
              >
                OKRES ARCHIWIZACJI DANYCH OSOBOWYCH. Dane osobowe użytkowników przechowywane są przez Administratora:
                <ol className="pl-6 pt-2">
                  <Typography
                    className={`${liLowerStyle}`}
                    variant="h5"
                    as="li"
                  >
                    w przypadku, gdy podstawą przetwarzania danych jest wykonanie umowy, tak długo, jak jest to niezbędne
                    do wykonania umowy, a po tym czasie przez okres odpowiadający okresowi przedawnienia roszczeń. Jeżeli
                    przepis szczególny nie stanowi inaczej, termin przedawnienia wynosi lat sześć, a dla roszczeń o
                    świadczenia okresowe oraz roszczeń związanych z prowadzeniem działalności gospodarczej - trzy lata.
                  </Typography>
                  <Typography
                    className={liLowerStyle}
                    variant="h5"
                    as="li"
                  >
                    w przypadku, gdy podstawą przetwarzania danych jest zgoda, tak długo, aż zgoda nie zostanie odwołana,
                    a po odwołaniu zgody przez okres czasu odpowiadający okresowi przedawnienia roszczeń jakie może
                    podnosić Administrator i jakie mogą być podnoszone wobec niego. Jeżeli przepis szczególny nie stanowi
                    inaczej, termin przedawnienia wynosi lat sześć, a dla roszczeń o świadczenia okresowe oraz roszczeń
                    związanych z prowadzeniem działalności gospodarczej - trzy lata.
                  </Typography>
                </ol>
              </Typography>
              <Typography
                className={liDecimalStyle}
                variant="h5"
                as="li"
              >
                Podczas korzystania ze strony internetowej mogą być pobierane dodatkowe informacje, w szczególności: adres
                IP przypisany do komputera użytkownika lub zewnętrzny adres IP dostawcy Internetu, nazwa domeny, rodzaj
                przeglądarki, czas dostępu, typ systemu operacyjnego.
              </Typography>
              <Typography
                className={liDecimalStyle}
                variant="h5"
                as="li"
              >
                Od użytkowników mogą być także gromadzone dane nawigacyjne, w tym informacje o linkach i odnośnikach, w
                które zdecydują się kliknąć lub innych czynnościach, podejmowanych na stronie internetowej. Podstawą
                prawną tego rodzaju czynności jest prawnie uzasadniony interes Administratora (art. 6 ust. 1 lit. f RODO),
                polegający na ułatwieniu korzystania z usług świadczonych drogą elektroniczną oraz na poprawie
                funkcjonalności tych usług.
              </Typography>
              <Typography
                className={liDecimalStyle}
                variant="h5"
                as="li"
              >
                Podanie danych osobowych przez użytkownika jest dobrowolne.
              </Typography>
              <Typography
                className={liDecimalStyle}
                variant="h5"
                as="li"
              >
                Dane osobowe będą przetwarzane także w sposób zautomatyzowany w formie profilowania, o ile użytkownik
                wyrazi na to zgodę na podstawie art. 6 ust. 1 lit. a) RODO. Konsekwencją profilowania będzie przypisanie
                danej osobie profilu w celu podejmowania dotyczących jej decyzji bądź analizy lub przewidywania jej
                preferencji, zachowań i postaw.
              </Typography>
              <Typography
                className={liDecimalStyle}
                variant="h5"
                as="li"
              >
                Administrator dokłada szczególnej staranności w celu ochrony interesów osób, których dane dotyczą, a w
                szczególności zapewnia, że zbierane przez niego dane są:
                <ol className="pl-6 pt-2">
                  <Typography
                    className={liLowerStyle}
                    variant="h5"
                    as="li"
                  >
                    przetwarzane zgodnie z prawem,
                  </Typography>
                  <Typography
                    className={liLowerStyle}
                    variant="h5"
                    as="li"
                  >
                    zbierane dla oznaczonych, zgodnych z prawem celów i niepoddawane dalszemu przetwarzaniu niezgodnemu z
                    tymi celami,
                  </Typography>
                  <Typography
                    className={liLowerStyle}
                    variant="h5"
                    as="li"
                  >
                    merytorycznie poprawne i adekwatne w stosunku do celów, w jakich są przetwarzane oraz przechowywane
                    w postaci umożliwiającej identyfikację osób, których dotyczą, nie dłużej niż jest to niezbędne do
                    osiągnięcia celu przetwarzania.
                  </Typography>
                </ol>
              </Typography>
            </ol>
          </Typography>
          
          <Typography
            className={`${liDecimalStyle} pb-8`}
            variant="h4"
            as="li"
          >
            UDOSTĘPNIENIE DANYCH OSOBOWYCH
            <ol className="pl-6 pt-2">
              <Typography
                className={liDecimalStyle}
                variant="h5"
                as="li"
              >
                Dane osobowe użytkowników przekazywane są dostawcom usług, z których korzysta Administrator przy
                prowadzeniu strony internetowej. Dostawcy usług, którym przekazywane są dane osobowe, w zależności
                od uzgodnień umownych i okoliczności, albo podlegają poleceniom Administratora co do celów i sposobów
                przetwarzania tych danych (podmioty przetwarzające) albo samodzielnie określają cele i sposoby ich
                przetwarzania (administratorzy).
              </Typography>
              <Typography
                className={liDecimalStyle}
                variant="h5"
                as="li"
              >
                Dane osobowe użytkowników są przechowywane wyłącznie na terenie Europejskiego Obszaru Gospodarczego
                (EOG).
              </Typography>
            </ol>
          </Typography>
          
          <Typography
            className={`${liDecimalStyle} pb-8`}
            variant="h4"
            as="li"
          >
            PRAWO KONTROLI, DOSTĘPU DO TREŚCI WŁASNYCH DANYCH ORAZ ICH POPRAWIANIA
            <ol className="pl-6 pt-2">
              <Typography
                className={liDecimalStyle}
                variant="h5"
                as="li"
              >
                Osoba, której dane dotyczą, ma prawo dostępu do treści swoich danych osobowych oraz prawo ich
                sprostowania, usunięcia, ograniczenia przetwarzania, prawo do przenoszenia danych, prawo wniesienia
                sprzeciwu, prawo do cofnięcia zgody w dowolnym momencie bez wpływu na zgodność z prawem przetwarzania,
                którego dokonano na podstawie zgody przed jej cofnięciem.
              </Typography>
              <Typography
                className={liDecimalStyle}
                variant="h5"
                as="li"
              >
                Podstawy prawne żądania użytkownika:
                <ol className="pl-6 pt-2">
                  <Typography
                    className={liLowerStyle}
                    variant="h5"
                    as="li"
                  >
                    <span className="font-bold">Dostęp do danych</span> – art. 15 RODO
                  </Typography>
                  <Typography
                    className={liLowerStyle}
                    variant="h5"
                    as="li"
                  >
                    <span className="font-bold">Sprostowanie danych</span> – art. 16 RODO.
                  </Typography>
                  <Typography
                    className={liLowerStyle}
                    variant="h5"
                    as="li"
                  >
                    <span className="font-bold">Usunięcie danych (tzw. prawo do bycia zapomnianym)</span> – art. 17 RODO.
                  </Typography>
                  <Typography
                    className={liLowerStyle}
                    variant="h5"
                    as="li"
                  >
                    <span className="font-bold">Ograniczenie przetwarzania</span> – art. 18 RODO.
                  </Typography>
                  <Typography
                    className={liLowerStyle}
                    variant="h5"
                    as="li"
                  >
                    <span className="font-bold">Przeniesienie danych</span> – art. 20 RODO.
                  </Typography>
                  <Typography
                    className={liLowerStyle}
                    variant="h5"
                    as="li"
                  >
                    <span className="font-bold">Sprzeciw</span> – art. 21 RODO
                  </Typography>
                  <Typography
                    className={liLowerStyle}
                    variant="h5"
                    as="li"
                  >
                    <span className="font-bold">Cofnięcie zgody</span> – art. 7 ust. 3 RODO.
                  </Typography>
                </ol>
              </Typography>
              
              <Typography
                className={liDecimalStyle}
                variant="h5"
                as="li"
              >
                W celu realizacji uprawnień, o których mowa w pkt 2 można wysłać stosowną wiadomość e-mail na
                adres: office@siltim.com.
              </Typography>
              <Typography
                className={liDecimalStyle}
                variant="h5"
                as="li"
              >
                W sytuacji wystąpienia przez użytkownika z uprawnieniem wynikającym z powyższych praw, Administrator
                spełnia żądanie albo odmawia jego spełnienia niezwłocznie, nie później jednak niż w ciągu miesiąca po
                jego otrzymaniu. Jeżeli jednak - z uwagi na skomplikowany charakter żądania lub liczbę żądań –
                Administrator nie będzie mógł spełnić żądania w ciągu miesiąca, spełni je w ciągu kolejnych dwóch miesięcy
                informując użytkownika uprzednio w terminie miesiąca od otrzymania żądania - o zamierzonym przedłużeniu
                terminu oraz jego przyczynach.
              </Typography>
              <Typography
                className={liDecimalStyle}
                variant="h5"
                as="li"
              >
                W przypadku stwierdzenia, że przetwarzanie danych osobowych narusza przepisy RODO, osoba, której dane
                dotyczą, ma prawo wnieść skargę do Prezesa Urzędu Ochrony Danych Osobowych.
              </Typography>
            </ol>
          </Typography>
          
          <Typography
            className={`${liDecimalStyle} pb-8`}
            variant="h4"
            as="li"
          >
            PLIKI &quot;COOKIES&quot;
            <ol className="pl-6 pt-2">
              <Typography
                className={liDecimalStyle}
                variant="h5"
                as="li"
              >
                Strona Administratora używa plików „cookies”.
              </Typography>
              <Typography
                className={liDecimalStyle}
                variant="h5"
                as="li"
              >
                Instalacja plików &quot;cookies&quot; jest konieczna do prawidłowego świadczenia usług na stronie
                internetowej. W plikach &quot;cookies&quot; znajdują się informacje niezbędne do prawidłowego
                funkcjonowania strony, a także dają one także możliwość opracowywania ogólnych statystyk odwiedzin strony
                internetowej.
              </Typography>
              <Typography
                className={liDecimalStyle}
                variant="h5"
                as="li"
              >
                W ramach strony stosowane są rodzaje plików &quot;cookies&quot;:
              </Typography>
              <Typography
                className={liDecimalStyle}
                variant="h5"
                as="li"
              >
                Administrator wykorzystuje własne pliki &quot;cookies&quot; w celu lepszego poznania sposobu interakcji
                użytkownika w zakresie zawartości strony. Pliki gromadzą informacje o sposobie korzystania ze strony
                internetowej przez użytkownika, typie strony, z jakiej użytkownik został przekierowany oraz liczbie
                odwiedzin i czasie wizyty użytkownika na stronie internetowej. Informacje te nie rejestrują konkretnych
                danych osobowych użytkownika, lecz służą do opracowania statystyk korzystania ze strony.
              </Typography>
              <Typography
                className={liDecimalStyle}
                variant="h5"
                as="li"
              >
                Użytkownik ma prawo zadecydowania w zakresie dostępu plików &quot;cookies&quot; do swojego komputera poprzez ich
                uprzedni wybór w oknie swojej przeglądarki.  Szczegółowe informacje o możliwości i sposobach obsługi
                plików &quot;cookies&quot; dostępne są w ustawieniach oprogramowania (przeglądarki internetowej).
              </Typography>
            </ol>
          </Typography>
          
          <Typography
            className={`${liDecimalStyle} pb-12`}
            variant="h4"
            as="li"
          >
            POSTANOWIENIA KOŃCOWE
            <ol className="pl-6 pt-2">
              <Typography
                className={liDecimalStyle}
                variant="h5"
                as="li"
              >
                Administrator stosuje środki techniczne i organizacyjne zapewniające ochronę przetwarzanych danych
                osobowych odpowiednią do zagrożeń oraz kategorii danych objętych ochroną, a w szczególności zabezpiecza
                dane przed ich udostępnieniem osobom nieupoważnionym, zabraniem przez osobę nieuprawnioną, przetwarzaniem
                z naruszeniem obowiązujących przepisów oraz zmianą, utratą, uszkodzeniem lub zniszczeniem.
              </Typography>
              <Typography
                className={liDecimalStyle}
                variant="h5"
                as="li"
              >
                Administrator udostępnia odpowiednie środki techniczne zapobiegające pozyskiwaniu i modyfikowaniu przez
                osoby nieuprawnione, danych osobowych przesyłanych drogą elektroniczną.
              </Typography>
              <Typography
                className={liDecimalStyle}
                variant="h5"
                as="li"
              >
                W sprawach nieuregulowanych niniejszą Polityką prywatności stosuje się odpowiednio przepisy RODO oraz
                inne właściwe przepisy prawa polskiego.
              </Typography>
            </ol>
          </Typography>
        </ol>
        <Typography
          className=""
          variant="h3"
          as="h3"
        >
          
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

export default Policy