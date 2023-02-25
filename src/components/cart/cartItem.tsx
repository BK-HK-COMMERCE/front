import React from 'react';
import { Cart } from '../../graphql/cart';

export default function CartItem({ item }: { item: Cart }) {
  return (
    <div style={{ width: '500px', height: '300px', border: '1px solid black' }}>
      <div>{item.title}</div>
      <div>{item.amount}</div>
      <div>{item.imageUrl}</div>
      <div>{item.price}</div>
    </div>
  );
}
