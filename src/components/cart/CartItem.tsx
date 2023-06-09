import { FC, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { BsCheckLg } from 'react-icons/bs';
import { Modal } from 'antd';

import Counter from '../common/Counter';
import { useDeleteCartItem } from '../../hooks/query/cartItem';
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

  const { mutate: deleteCartItem } = useDeleteCartItem();

  const askIsExistItem = () => {
    return selectedItems.find((selectedItem) => selectedItem.id === item.id);
  };

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  function handleOptionCount(delta: number) {
    return function () {
      const newCartItems = cartItems.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, count: cartItem.count + delta } : cartItem
      );
      setCartItems(newCartItems);

      let newSelectedItems = [...selectedItems];
      const itemIdx = selectedItems.findIndex((selectedItem) => selectedItem.id === item.id);

      if (itemIdx !== -1) {
        newSelectedItems[itemIdx] = { ...newSelectedItems[itemIdx], count: newSelectedItems[itemIdx].count + delta };
      } else {
        newSelectedItems = newSelectedItems.concat({
          ...item,
          count: item.count + delta,
        });
      }

      setSelectedItems(newSelectedItems);
    };
  }

  const handleItemCheckBox = () => {
    const isExist = askIsExistItem();

    if (isExist) {
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

        const isExist = askIsExistItem();

        if (isExist) {
          const newSelectedItems = selectedItems.filter((selectedItem) => selectedItem.id !== item.id);
          setSelectedItems(newSelectedItems);
        }

        deleteCartItem(item.id);
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
        onPlusTarget={handleOptionCount(1)}
        onMinusTarget={handleOptionCount(-1)}
      />
      <S.DeleteButton onClick={handleCartItemDelete}>삭제</S.DeleteButton>
    </S.CartItemWrapper>
  );
};

export default CartItem;
