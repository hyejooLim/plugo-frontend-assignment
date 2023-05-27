import clientApi from '..';
import { CartItem } from '../../types';

const getCartItems = async (): Promise<CartItem[]> => {
  const response = await clientApi.get<CartItem[]>('/cart-items');
  return response;
};

export default getCartItems;
