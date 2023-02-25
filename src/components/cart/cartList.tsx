import React from 'react';
import { Cart } from '../../graphql/cart';
import CartItem from './cartItem';

export default function CartList({ cartItems }: { cartItems: Cart[] }) {
  return (
    <div>
      {cartItems.map((item) => (
        <CartItem item={item} key={item.id} />
      ))}
    </div>
  );
}
