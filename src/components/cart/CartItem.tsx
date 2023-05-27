import { FC, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { BsCheckLg } from 'react-icons/bs';
import { Modal } from 'antd';

import Counter from '../common/Counter';
import { cartItemsState, selectedItemsState } from '../../recoil/cart';
import { CartItem as CartItemType } from '../../types';
import * as S from '../../styles/cart/CartItem';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: FC<CartItemProps> = ({ item }) => {
  const [count, setCount] = useState(item.count);

  const [cartItems, setCartItems] = useRecoilState(cartItemsState);
  const [selectedItems, setSelectedItems] = useRecoilState(selectedItemsState);

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  const handleOptionPlus = () => {
    const newCartItems = cartItems.map((cartItem) =>
      cartItem.id === item.id ? { ...cartItem, count: cartItem.count + 1 } : cartItem
    );
    setCartItems(newCartItems);

    const existItem = selectedItems.find((selectedItem) => selectedItem.id === item.id);

    if (existItem) {
      const newSelectedItems = selectedItems.map((selectedItem) =>
        selectedItem.id === item.id ? { ...selectedItem, count: selectedItem.count + 1 } : selectedItem
      );
      setSelectedItems(newSelectedItems);
    } else {
      const newSelectedItems = selectedItems.concat({
        ...item,
        count: item.count + 1,
      });
      setSelectedItems(newSelectedItems);
    }
  };

  const handleOptionMinus = () => {
    const newCartItems = cartItems.map((cartItem) =>
      cartItem.id === item.id ? { ...cartItem, count: cartItem.count - 1 } : cartItem
    );
    setCartItems(newCartItems);

    const existItem = selectedItems.find((selectedItem) => selectedItem.id === item.id);

    if (existItem) {
      const newSelectedItems = selectedItems.map((selectedItem) =>
        selectedItem.id === item.id ? { ...selectedItem, count: selectedItem.count - 1 } : selectedItem
      );
      setSelectedItems(newSelectedItems);
    } else {
      const newSelectedItems = selectedItems.concat({
        ...item,
        count: item.count - 1,
      });
      setSelectedItems(newSelectedItems);
    }
  };

  const handleItemCheckBox = () => {
    const existItem = selectedItems.find((selectedItem) => selectedItem.id === item.id);

    if (existItem) {
      const newSelectedItems = selectedItems.filter((selectedItem) => selectedItem.id !== item.id);
      setSelectedItems(newSelectedItems);
    } else {
      const newSelectedItems = selectedItems.concat(item);
      setSelectedItems(newSelectedItems);
    }
  };

  const handleCartItemDelete = () => {
    Modal.confirm({
      content: '장바구니 아이템을 삭제하시겠습니까?',
      cancelText: '그만두기',
      okText: '삭제하기',
      onOk: () => {
        const newCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
        setCartItems(newCartItems);
      },
    });
  };

  return (
    <S.CartItemWrapper>
      <div className='checkbox' onClick={handleItemCheckBox}>
        {selectedItems?.find((selectedItem) => selectedItem.id === item.id) && <BsCheckLg />}
      </div>
      <S.CartItemInfo>
        <img src={item.imageUrl} width={140} />
        <div className='cart_item_text_info'>
          <div className='item_name'>
            {item.name} - {item.color.name}
          </div>
          <div className='item_price'>{item.price.toLocaleString()}원</div>
        </div>
      </S.CartItemInfo>
      <Counter
        count={count}
        isAllowInputChange={false}
        onPlusTarget={handleOptionPlus}
        onMinusTarget={handleOptionMinus}
      />
      <S.DeleteButton onClick={handleCartItemDelete}>삭제</S.DeleteButton>
    </S.CartItemWrapper>
  );
};

export default CartItem;
