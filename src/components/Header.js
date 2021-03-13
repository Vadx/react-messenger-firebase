import React, { useContext } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Button, Grid } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import { Context } from '../index'
import { useAuthState } from 'react-firebase-hooks/auth'

const Header = () => {
  const { auth } = useContext(Context)
  const [user] = useAuthState(auth)

  return (
    <AppBar color='inherit' position='static'>
      <Toolbar variant='dense'>
        <Grid container justify='flex-end'>
          {user
            ? <Button onClick={() => auth.signOut()} variant='text' size='small'>Log out</Button>
            : <NavLink to='/login'>
                <Button variant='text' size='small'>Log in</Button>
              </NavLink>}
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header
