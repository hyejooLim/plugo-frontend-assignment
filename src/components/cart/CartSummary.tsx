import { useRecoilValue } from 'recoil';

import { selectedItemsState, totalPriceState } from '../../recoil/cart';
import { CartSummaryWrapper, OrderCard } from '../../styles/cart/CartSummary';

const CartSummary = () => {
  const totalPrice = useRecoilValue(totalPriceState);
  const selectedItems = useRecoilValue(selectedItemsState);

  const handleProductsOrder = () => {
    console.log('주문이 완료되었습니다.', selectedItems, totalPrice);
  };

  return (
    <CartSummaryWrapper>
      <OrderCard>
        <div className='order_card_text'>주문 금액</div>
        <div className='order_card_info'>
          <div className='price_zone'>
            <div className='total_price'>Total Price</div>
            <div>{totalPrice?.toLocaleString()}원</div>
          </div>
          <button className='order_button' onClick={handleProductsOrder}>
            주문하기
          </button>
        </div>
      </OrderCard>
    </CartSummaryWrapper>
  );
};

export default CartSummary;
