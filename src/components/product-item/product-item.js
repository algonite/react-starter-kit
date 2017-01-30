import React from 'react';
import { Link } from 'react-router';
import s from './product-item.scss';

export default ({ product }) => (
  <div className={s.root}>
    <p className={s.productName}>{product.name}</p>
    <Link to={`/products/${product.id}`}>Show Details</Link>
  </div>
)
