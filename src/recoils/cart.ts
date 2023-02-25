import { atom, useRecoilValue, selectorFamily } from 'recoil';

// 카트에 아이템 id 별로 담긴 갯수를 저장.
export const cartState = atom<Map<string, number>>({
  key: 'cartState',
  default: new Map(),
});

// id 별로 담긴 갯수를 가져오거나 업데이트.
export const cartItemSelector = selectorFamily({
  key: 'cartItem',
  get:
    (id: string) =>
    ({ get }) => {
      const carts = get(cartState);
      return carts.get(id);
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
