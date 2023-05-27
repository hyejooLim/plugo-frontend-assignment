import styled from 'styled-components';

export const CartItemWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding: 30px;

  &:not(:last-child) {
    border-bottom: 1px solid #888;
  }
`;

export const CartItemInfo = styled.div`
  display: flex;
  align-items: center;

  .cart_item_text_info {
    margin-left: 30px;

    .item_name {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 10px;
    }

    .item_price {
      font-size: 16px;
      font-weight: 300;
    }
  }
`;

export const DeleteButton = styled.button`
  padding: 10px 16px;
  background-color: #fff;
  font-size: 15px;
  border: 1px solid #a0a0a0;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    border-color: #333;
  }
`;
