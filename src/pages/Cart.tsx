import { useRecoilValue } from 'recoil';

import AppLayout from '../components/layout/AppLayout';
import CartItemList from '../components/cart/CartItemList';
import CartSummary from '../components/cart/CartSummary';
import { cartItemsState } from '../recoil/cart';
import { useGetCartItems } from '../hooks/query/cartItems';
import { CartHeader, CartBody } from '../styles/pages/Cart';

const Cart = () => {
  useGetCartItems();
  const cartItems = useRecoilValue(cartItemsState);

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
