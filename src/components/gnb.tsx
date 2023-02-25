import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { cartItemSelector, cartState } from '../recoils/cart';

const Gnb = () => {
  const cartAmount = useRecoilValue(cartState);
  return (
    <nav>
      <ul
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
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/products">상품목록</Link>
        </li>
        <li>
          <Link to="/cart">
            장바구니 {[...cartAmount.values()].reduce((x, y) => x + y, 0)}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Gnb;
