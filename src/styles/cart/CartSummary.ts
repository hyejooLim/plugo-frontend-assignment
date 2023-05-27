import styled from 'styled-components';

export const CartSummaryWrapper = styled.div`
  width: 380px;
  height: 320px;
  margin: 45px 0 0 20px;
  background-color: #b9e0d9;
`;

export const OrderCard = styled.div`
  padding: 20px;

  .order_card_text {
    font-size: 26px;
    text-align: center;
    padding: 24px 0;
    border-bottom: 1px solid #333;
  }

  .order_card_info {
    margin: 70px 5px 0 5px;
    text-align: center;

    .price_zone {
      display: flex;
      justify-content: space-between;
      font-size: 20px;
    }

    .order_button {
      margin-top: 60px;
      font-size: 18px;
      width: 100%;
      height: 46px;
      border-radius: 6px;
      background-color: #fff;
      transition: background-color 0.3s;
      cursor: pointer;

      &:hover {
        background-color: #ececec;
      }
    }
  }
`;
