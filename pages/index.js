import React from 'react'

import Head from 'next/head'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import Timer from 'components/Timer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Container component='main'>
        <Typography align='center'>
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
        </Typography>
        <Timer />
      </Container>
    </div>
  )
}
