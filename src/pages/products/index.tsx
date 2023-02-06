import React from 'react';
import { useQuery } from 'react-query';
import ProductItem from '../../components/products/item';
import { fetcher, QueryKeys } from '../../queryClient';
import { Product } from '../../types';

const ProductsPage = () => {
  const { data, isLoading } = useQuery<Product[]>(QueryKeys.PRODUCTS, () =>
    fetcher({
      method: 'GET',
      path: '/products',
    })
  );

  if (isLoading) {
    return <div>Loading..</div>;
  }

  console.log(data);
  return (
    <div>
      <ul>
        {data?.map((product) => (
          <ProductItem {...product} key={product.id} />
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
