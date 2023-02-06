import React from 'react';
import { Product } from '../../types';

export default function ProductItem({
  category,
  description,
  id,
  image,
  price,
  rating,
  title,
}: Product) {
  return (
    <li>
      <p>{category}</p>
      <p>{title}</p>
      <p>{description}</p>
      <img src={image} alt="product image" />
      <span>${price}</span>
      <span>{rating.rate}</span>
    </li>
  );
}
