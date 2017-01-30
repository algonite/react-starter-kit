import React from 'react';
import { Route } from 'react-router';
import * as Containers from './containers';

export default (
  <Route component={Containers.LayoutContainer}>
    <Route path="/" component={Containers.HomeContainer} />
    <Route path="/products/:id" component={Containers.ProductContainer} />
  </Route>
)
