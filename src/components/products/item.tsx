import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../graphql/products';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { cartItemSelector } from '../../recoils/cart';
import { useQuery, useMutation } from 'react-query';
import { graphqlFetcher, QueryKeys } from '../../queryClient';
import { ADD_CART } from '../../graphql/cart';

const ItemBox = styled.li`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  position: relative;
  border: 1px solid black;
  padding: 16px;

  & img {
    width: 100%;
    height: 300px;
    object-fit: contain;
  }
`;

const ItemTitle = styled.div`
  font-size: 0.75rem;
  color: black;
  cursor: pointer;
`;

const LinkBox = styled(Link)`
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ItemPrice = styled.div`
  font-size: 0.8rem;
  font-weight: 600;
`;

const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;

export default function ProductItem({ id, imageUrl, price, title }: Product) {
  // const [cartAmount, setCartAmount] = useRecoilState(cartItemSelector(`${id}`));
  // const addToCart = () => setCartAmount((prev) => (prev || 0) + 1);

  const { mutate: addCart } = useMutation([QueryKeys.CART, id], (id: number) =>
    graphqlFetcher(ADD_CART, { id })
  );
  return (
    <ItemBox>
      <img src={imageUrl} alt="product" />
      <DescriptionBox>
        <ItemTitle>
          <LinkBox to={`/products/${id}`}>{title}</LinkBox>
        </ItemTitle>
        <ItemPrice>${price}</ItemPrice>
        <button onClick={() => addCart(id)}>담기</button>
      </DescriptionBox>
    </ItemBox>
  );
}
