import { atom } from 'recoil';
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
