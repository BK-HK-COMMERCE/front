import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { cartItemSelector, cartState } from '../recoils/cart';
import styled from '@emotion/styled';

const Header = styled.header`
  width: 100%;
  height: 100px;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
`;

const Logo = styled.div`
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  & img {
    width: 100px;
  }
`;

const UserMenu = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 0.5rem;
`;

const Category = styled.ul`
  width: 1200px;
  height: 100px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 1rem;
  list-style: none;
`;

const CategoryItem = styled.li`
  text-decoration: none;
`;

const Gnb = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <Header>
        <div>메뉴</div>
        <Logo onClick={() => navigate('/')}>
          <img src="/public/Logo.png" alt="Logo" />
        </Logo>

        <UserMenu>
          <div>로그인</div>
          <Link to="/cart">장바구니</Link>
        </UserMenu>
      </Header>
      <Category
        style={{
          width: '100%',
          height: '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          columnGap: '16px',
          listStyle: 'none',
        }}
      >
        <CategoryItem>
          <Link to="/products">Best</Link>
        </CategoryItem>
        <li>
          <Link to="##">Male</Link>
        </li>
        <li>
          <Link to="##">Female</Link>
        </li>
        <li>
          <Link to="##">sport</Link>
        </li>
        <li>
          <Link to="##">Sale</Link>
        </li>
      </Category>
    </nav>
  );
};

export default Gnb;
