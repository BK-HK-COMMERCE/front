import { gql } from 'graphql-tag';

// 쿼리, 타입 정의

export type Product = {
  id: number;
  imageUrl: string;
  price: number;
  title: string;
  description: string;
  createdAt: string;
};

export type Products = {
  products: Product[];
};

export const GET_PRODUCTS = gql`
  query GET_PRODUCTS {
    id
    imageUrl
    price
    title
    description
    createAt
  }
`;

export const GET_PRODUCT = gql`
  query GET_PRODUCT($id: string) {
    GET_PRODUCT(id: $id) {
      id
      imageUrl
      price
      title
      description
      createAt
    }
  }
`;
