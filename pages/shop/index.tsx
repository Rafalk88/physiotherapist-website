import Head from "next/head"

import { useMediaQuery } from "@/hooks/useMediaQuery"

const Shop = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1000px)")
  const iframeRwdHeight = isAboveMediumScreens ? "850px" : "1720px"

  return (
    <>
      <Head>
        <title>
          Siltim Sp. z o.o. | Sklep
        </title>
      </Head>
      <section className="w-5/6 max-w-[1200px] mx-auto">
        <div className="w-full pt-40">
          <iframe
            src="https://siltim-chem-catalogue.onrender.com"
            width="100%"
            height={iframeRwdHeight}
          />
        </div>
      </section>
    </>
  )
}

export default Shop