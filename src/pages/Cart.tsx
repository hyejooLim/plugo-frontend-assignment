import { useRecoilValue, useSetRecoilState } from 'recoil';

import AppLayout from '../components/layout/AppLayout';
import CartItemList from '../components/cart/CartItemList';
import CartSummary from '../components/cart/CartSummary';
import { cartItemsState, selectedItemsState } from '../recoil/cart';
import { useGetCartItems } from '../hooks/query/cartItems';
import { CartHeader, CartBody } from '../styles/pages/Cart';
import { useEffect } from 'react';

const Cart = () => {
  useGetCartItems();
  const cartItems = useRecoilValue(cartItemsState);
  const setSelectedItems = useSetRecoilState(selectedItemsState);

  useEffect(() => {
    setSelectedItems(cartItems);
  }, []);

  return (
    <AppLayout>
      <CartHeader>
        <div>Cart List ({cartItems?.length})</div>
      </CartHeader>
      <CartBody>
        <CartItemList />
        <CartSummary />
      </CartBody>
    </AppLayout>
  );
};

export default Cart;
