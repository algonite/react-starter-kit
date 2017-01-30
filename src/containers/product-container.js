import React, { Component } from 'react';
import { listener } from 'hacksaw-react';
import { ProductStore } from '../stores';
import { ProductPage } from '../pages';

@listener(ProductStore)
class ProductContainer extends Component {
  render() {
    const { id } = this.props.params;

    return (
      <ProductPage
        product={ProductStore.find(Number(id))}
      />
    )
  }
}

export default ProductContainer;
