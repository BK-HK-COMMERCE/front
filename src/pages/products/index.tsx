import React from 'react';
import { useQuery } from 'react-query';
import ProductItem from '../../components/products/item';
import { graphqlFetcher, QueryKeys } from '../../queryClient';
import styled from '@emotion/styled';
import { GET_PRODUCTS, Products } from '../../graphql/products';

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
  const { data, isLoading, isError } = useQuery<Products>(
    QueryKeys.PRODUCTS,
    () => graphqlFetcher(GET_PRODUCTS)
  );

  if (isLoading) {
    return <div>Loading..</div>;
  }

  if (isError) {
    <div>Error...</div>;
  }

  console.log(data?.products);
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
            {data?.products.map((product) => (
              <ProductItem {...product} key={product.id} />
            ))}
          </ProductBox>
        </div>
      </Container>
    </>
  );
};

export default ProductsPage;
