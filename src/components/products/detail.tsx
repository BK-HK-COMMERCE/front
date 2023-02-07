import React from 'react';
import styled from '@emotion/styled';
import { Product } from '../../types';

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

const ProductDetail = ({ image, title, price, description }: Product) => {
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

export default ProductDetail;
