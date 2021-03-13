import React from 'react'
import { CircularProgress, Container, Grid } from '@material-ui/core'

const Loader = () => {
  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50 }}
        alignItems='center'
        justify='center'
      >
        <CircularProgress />
      </Grid>
    </Container>
  )
}

export default Loader
