import React, { Component } from 'react';

export default class ProductPage extends Component {
  render() {
    const { product } = this.props;

    return (
      <div>
        <h2>{product.name}</h2>
        <p>
          This is product page
        </p>
      </div>
    )
  }
}
