import React, { useContext } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../routes'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from '../index'

const AppRouter = () => {
  const { auth } = useContext(Context)
  const [user] = useAuthState(auth)

  return user
    ? (
      <Switch>
        {privateRoutes.map(({ path, Component }) =>
          <Route key={path} path={path} component={Component} exact />
        )}
        <Redirect to='/chat' />
      </Switch>
      ) : (
        <Switch>
          {publicRoutes.map(({ path, Component }) =>
            <Route key={path} path={path} component={Component} exact />
          )}
          <Redirect to='/login' />
        </Switch>
      )
}

export default AppRouter
