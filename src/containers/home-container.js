import React, { Component } from 'react';
import { listener } from 'hacksaw-react';
import { ProductStore } from '../stores';
import { HomePage } from '../pages';

@listener(ProductStore)
class HomeContainer extends Component {
  handleSubmitProduct(product) {
    ProductStore.put({
      id: Math.random(),
      ...product
    });
  }

  render() {
    return (
      <HomePage
        products={ProductStore.all}
        onSubmitProduct={::this.handleSubmitProduct}
      />
    )
  }
}

export default HomeContainer;
