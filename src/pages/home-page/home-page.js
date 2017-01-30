import React, { Component } from 'react';
import { Link } from 'react-router';
import { Form } from './partials';
import { ProductItem } from '$components';

export default class HomePage extends Component {
  submit() {}

  render() {
    const { products, onSubmitProduct } = this.props;

    return (
      <div>
        <h2>Home Page</h2>
        <p>
          These are our goods:
        </p>

        {products.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}

        <hr />

        <h4>Add Product</h4>
        <Form
          onSubmit={onSubmitProduct}
        />
      </div>
    )
  }
}
