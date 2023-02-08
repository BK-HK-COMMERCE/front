import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import ProductDetail from '../../../components/products/detail';
import { graphqlFetcher, QueryKeys } from '../../../queryClient';
import { GET_PRODUCT, Product } from '../../../graphql/products';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery<Product>(
    QueryKeys.PRODUCTS,
    () => graphqlFetcher(GET_PRODUCT, { id })
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return null;
  }

  return <ProductDetail {...data} />;
};

export default ProductDetailPage;
