import { useEffect, useCallback } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { BsCheckLg } from 'react-icons/bs';

import CartItem from './CartItem';
import { cartItemsState, selectedItemsState, totalPriceState } from '../../recoil/cart';
import { CartItemListWrapper } from '../../styles/cart/CartItemList';

const CartItemList = () => {
  const cartItems = useRecoilValue(cartItemsState);
  const setTotalPrice = useSetRecoilState(totalPriceState);
  const [selectedItems, setSelectedItems] = useRecoilState(selectedItemsState);

  useEffect(() => {
    setTotalPrice(getTotalPrice());
  }, [selectedItems]);

  const handleAllItemCheck = () => {
    if (selectedItems?.length === cartItems?.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cartItems);
    }
  };

  const getTotalPrice = useCallback(() => {
    return selectedItems?.reduce((acc, item) => acc + item.price * item.count, 0);
  }, [selectedItems]);

  return (
    <>
      <CartItemListWrapper>
        <div className='cart_container'>
          <div className='checkbox all' onClick={handleAllItemCheck}>
            {cartItems.length > 0 && selectedItems?.length === cartItems?.length && <BsCheckLg />}
          </div>
          <div className='cart_item_box'>
            {cartItems.length > 0 ? (
              <ul>
                {cartItems?.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </ul>
            ) : (
              <div className='empty_cart'>장바구니에 상품이 존재하지 않습니다.</div>
            )}
          </div>
        </div>
      </CartItemListWrapper>
    </>
  );
};

export default CartItemList;
