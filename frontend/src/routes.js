import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import Search from './pages/search'

export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>

        <Route path="/" exact component={Search}/>
        
      </Switch>
    </BrowserRouter>
  )
}