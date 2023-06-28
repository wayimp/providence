import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import '@fontsource/poppins/400.css'
import '@fontsource/open-sans/700.css'
import '../styles/globals.css'

const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  textStyles: {
    h1: {
      fontSize: ['48px', '72px'],
      fontWeight: 400,
      lineHeight: '140%',
      letterSpacing: '+20%',
    },
    h2: {
      fontSize: ['36px', '48px'],
      fontWeight: 400,
      lineHeight: '140%',
      letterSpacing: '+20%',
    },
    p: {
      fontSize: ['36px', '48px'],
      fontWeight: 400,
      lineHeight: '140%',
      letterSpacing: '+20%',
    },
  },
  styles: {
    global: (props) => ({
      body: {
        fontFamily: 'Verdana, sans-serif',
        color: mode('gray.800', 'whiteAlpha.900')(props),
        bg: mode('#0f733b', 'gray.800')(props),
        lineHeight: '140%',
        letterSpacing: '+20%',
      },
    }),
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp