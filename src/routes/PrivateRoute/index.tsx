import React, { Component } from 'react'
import { Route } from 'react-router-dom'
type RouteTye = {
  path: string
  component: any
  token: string
}

export const PrivateRoute = ({ component: Component, path, token, ...rest }: RouteTye) => {
  return (
    <Route
      path={path}
      {...rest}
      component={(props: any) => {
        return <Component {...props}></Component>
      }}
    ></Route>
  )
}
