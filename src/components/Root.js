// @flow
import React from 'react'
import BrowserRouter from 'react-router/BrowserRouter'
import Match from 'react-router/Match'
import Home from './Home'

const Root = () =>
  <BrowserRouter>
    <Match pattern='/' component={Home} />
  </BrowserRouter>

export default Root
