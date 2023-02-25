import { atom, useRecoilValue, selectorFamily } from 'recoil';

// 카트에 아이템 id 별로 담긴 갯수를 저장해둠
export const cartState = atom<Map<string, number>>({
  key: 'cartState',
  default: new Map(),
});

// 상품 당, id를 인자로 받아 해당 아이템을 cartState에서 추출
export const cartItemSelector = selectorFamily({
  key: 'cartItem',
  get:
    (id: string) =>
    ({ get }) => {
      const carts = get(cartState);
      return carts.get(id); // value
    },
  set:
    (id: string) =>
    ({ get, set }, newValue) => {
      if (typeof newValue == 'number') {
        const newCart = new Map([...get(cartState)]);
        newCart.set(id, newValue); // map의 set
        console.log(newCart);
        set(cartState, newCart); // SetRecoilState
      }
    },
});
