import React from 'react';
import { useQuery } from 'react-query';
import ProductItem from '../../components/products/item';
import { fetcher, QueryKeys } from '../../queryClient';
import { Product } from '../../types';
import styled from '@emotion/styled';

const Container = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
`;

const MenuBox = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0 16px;
`;

const ProductBox = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

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
    <>
      <Container>
        <MenuBox>
          <li>
            <a href="##">모두보기</a>
          </li>
          <li>
            <a href="##">의류</a>
          </li>
          <li>
            <a href="##">슈즈 & 악세서리</a>
          </li>
        </MenuBox>

        <div>
          <h1>모두보기</h1>
          <ProductBox>
            {data?.map((product) => (
              <ProductItem {...product} key={product.id} />
            ))}
          </ProductBox>
        </div>
      </Container>
    </>
  );
};

export default ProductsPage;
