import TopDiv from "./TopDiv"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Anchor from "./Anchor"

import { useMediaQuery } from "@/hooks/useMediaQuery"

type Props = {
  children: React.ReactNode
  isTopOfPage: boolean
}

const Layout = ({ children, isTopOfPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1000px)")

  return (
    <section>
      {
        isAboveMediumScreens ? (
          <>
            <TopDiv />
            <Anchor />
          </>
        )
        :
        null
      }
      <Navbar 
        isTopOfPage={isTopOfPage}
      />
      <main>
        {children}
      </main>
      <Footer />
    </section>
  )
}

export default Layout