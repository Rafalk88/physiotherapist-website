import { extendTheme } from '@chakra-ui/react'

import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/700.css'
import '@fontsource/montserrat/800.css'

export const theme = extendTheme({
  fonts: {
    heading: `'montserrat', sans-serif`,
    body: `'montserrat', sans-serif`
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 700,
        borderRadius: "26px",
        transitionDuration: "0.5s",
        transitionTimingFunction: "ease-in-out",
      },
      variants: {
        base: {
          bg: "#F4F4F5",
          _hover: {
            bg: "#4A4661",
            color: "#FFFFFF",
          },
        },
        primary: {
          bg: "#0133FF",
          color: "#FFFFFF",
          _hover: {
            bg: "#3E64FF",
          },
        },
        secondary: {
          bg: "#FFFFFF",
          color: "#0133FF",
          border: "1px solid",
          borderColor: "#0133FF",
          _hover: {
            bg: "#0133FF",
            color: "#FFFFFF",
          },
        },
        link: {
          color: "#0133FF",
          _hover: {
            underline: "true"
          },
        }
      },
      defaultProps: {
        variant: "base",
      },
    },
  }
})

export default theme