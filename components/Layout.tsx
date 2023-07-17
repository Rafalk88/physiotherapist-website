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
            <Anchor />
          </>
        )
        :
        null
      }
      <Navbar 
        isTopOfPage={isTopOfPage}
      />
      <main className="max-w-full min-h-[calc(100vh-105px)]">
        {children}
      </main>
      <Footer />
    </section>
  )
}

export default Layout