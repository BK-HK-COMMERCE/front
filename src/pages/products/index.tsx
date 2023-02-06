import React from 'react';
import { useQuery } from 'react-query';
import { fetcher, QueryKeys } from '../../queryClient';

const ProductsPage = () => {
  const { data, isLoading } = useQuery(QueryKeys.PRODUCTS, () =>
    fetcher({
      method: 'GET',
      path: '/products',
    })
  );

  if (isLoading) {
    return <div>Loading..</div>;
  }

  console.log(data);
  return <div>상품 조회 페이지</div>;
};

export default ProductsPage;
