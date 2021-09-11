import React from 'react'

import Document, { Html, Head, Main, NextScript } from 'next/document'

import { ServerStyleSheets } from '@material-ui/core/styles'

import theme from 'theme'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='pt-BR'>
        <Head>
          <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
          <meta name='title' content='Focusely' />
          <meta
            name='description'
            content='Focusely é um app fácil para usar a Técnica Pomodoro. Funciona em desktop e celular'
          />
          <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
          <link rel='manifest' href='/manifest.json' />
          <link rel='mask-icon' href='/safari-pinned-tab.svg' color={theme.palette.primary.light} />
          <meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
          <meta name='apple-mobile-web-app-title' content='Focusely' />
          <meta name='application-name' content='Focusely' />
          <meta name='msapplication-TileColor' content='#f25c54' />
          <meta name='theme-color' content={theme.palette.primary.light} />
          <style>
            @import
            url(&lsquo;https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap&rsquo;);
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () =>
    originalRenderPage({
      // eslint-disable-next-line
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />)
    })

  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()]
  }
}
