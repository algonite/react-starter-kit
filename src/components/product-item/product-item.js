import React from 'react';
import { Link } from 'react-router';

export default ({ product }) => (
  <div>
    <p>{product.name}</p>
    <Link to={`/products/${product.id}`}>Show Details</Link>
  </div>
)
