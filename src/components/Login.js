import React, { useContext } from 'react'
import { Button, Container, Grid } from '@material-ui/core'
import { Context } from '../index'
import firebase from 'firebase'

const Login = () => {
  const { auth } = useContext(Context)

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    const { user } = await auth.signInWithPopup(provider)
    console.log(user)
  }

  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50 }}
        alignItems='center'
        justify='center'
      >
        <Button onClick={login} variant='contained' color='primary'>Log in</Button>
      </Grid>
    </Container>
  )
}

export default Login
