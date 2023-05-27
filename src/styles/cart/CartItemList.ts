import styled from 'styled-components';

export const CartItemListWrapper = styled.div`
  margin-left: 120px;

  .checkbox {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    color: #666;
    border: 1px solid #666;
    text-align: center;
    line-height: 26px;
    font-size: 16px;
    cursor: pointer;
  }

  .all {
    margin-left: 28px;
  }

  .cart_item_box {
    margin-top: 20px;
    border: 2px solid #333;
    width: 862px;
    min-height: 224px;

    .empty_cart {
      text-align: center;
      line-height: 224px;
      font-size: 18px;
    }
  }
`;
