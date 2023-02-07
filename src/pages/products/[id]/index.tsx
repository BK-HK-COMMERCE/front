import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import ProductDetail from '../../../components/products/detail';
import { fetcher, QueryKeys } from '../../../queryClient';
import { Product } from '../../../types';

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

  if (!data) {
    return null;
  }

  return <ProductDetail {...data} />;
};

export default ProductDetailPage;
