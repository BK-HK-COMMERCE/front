import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../graphql/products';
import styled from '@emotion/styled';

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
  return (
    <ItemBox>
      <img src={imageUrl} alt="product" />
      <DescriptionBox>
        <ItemTitle>
          <LinkBox to={`/products/${id}`}>{title}</LinkBox>
        </ItemTitle>
        <ItemPrice>${price}</ItemPrice>
      </DescriptionBox>
    </ItemBox>
  );
}
