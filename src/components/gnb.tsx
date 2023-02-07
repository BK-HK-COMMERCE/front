import React from 'react';
import { Link } from 'react-router-dom';

const Gnb = () => (
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
        <Link to="/cart">장바구니</Link>
      </li>
    </ul>
  </nav>
);

export default Gnb;
