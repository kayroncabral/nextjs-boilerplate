import React from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'

import theme from 'theme'

export default function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
