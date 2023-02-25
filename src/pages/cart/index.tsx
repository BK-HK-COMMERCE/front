import React from 'react';
import { useQuery } from 'react-query';
import CartList from '../../components/cart/cartList';
import { GET_CART, Cart } from '../../graphql/cart';
import { graphqlFetcher, QueryKeys } from '../../queryClient';

export default function CartPage() {
  const { data, isLoading } = useQuery(QueryKeys.CART, () =>
    graphqlFetcher(GET_CART)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const cartItems: Cart[] = Object.values(data);

  if (!cartItems.length) {
    return <div>장바구니가 비었습니다.</div>;
  }

  return <CartList cartItems={cartItems} />;
}
