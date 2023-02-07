import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { fetcher, QueryKeys } from '../../../queryClient';
import { Product } from '../../../types';
import styled from '@emotion/styled';

const Container = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
`;

const ImageBox = styled.div`
  & img {
    width: 100%;
    height: 600px;
    object-fit: contain;
  }
`;

const DescriptionBox = styled.div`
  position: relative;
  padding: 16px;
`;

const Title = styled.h3`
  font-weight: 600;
  margin-bottom: 16px;
`;

const Price = styled.div`
  font-weight: 600;
  margin-bottom: 16px;
`;
const ProductDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery<Product>(QueryKeys.PRODUCTS, () =>
    fetcher({
      method: 'GET',
      path: `/products/${id}`,
    })
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const { category, title, image, price, rating, description } = data;

  return (
    <Container>
      <ImageBox>
        <img src={image} alt="Detail"></img>
      </ImageBox>
      <DescriptionBox>
        <Title>{title}</Title>
        <Price>${price}</Price>
        <div>{description}</div>
      </DescriptionBox>
    </Container>
  );
};

export default ProductDetailPage;
