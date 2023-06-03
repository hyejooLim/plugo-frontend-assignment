import { atom, selector } from 'recoil';
import { CartItem } from '../types';

export const cartItemsState = atom<CartItem[]>({
  key: 'cartItems',
  default: [],
  dangerouslyAllowMutability: true,
});

export const selectedItemsState = atom<CartItem[]>({
  key: 'selectedItems',
  default: [],
  dangerouslyAllowMutability: true,
});

export const totalPriceState = atom<number>({
  key: 'totalPrice',
  default: 0,
  dangerouslyAllowMutability: true,
});

export const cartItemsLengthState = selector<number>({
  key: 'cartItemsLength',
  get: ({ get }) => {
    const items = get(cartItemsState);
    return items.length;
  },
});
