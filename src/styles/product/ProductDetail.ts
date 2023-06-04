import styled from 'styled-components';

export const ProductDetailWrapper = styled.div`
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  height: 100%;
`;

export const ProductDetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1100px;
  margin: 80px 100px;
  position: absolute;
`;

export const ProductInfo = styled.div`
  padding: 30px 60px;

  .product_name {
    font-size: 34px;
    margin: 30px 0 24px 0;
  }

  .product_price {
    font-size: 22px;
    font-family: 'Courier New', Courier, monospace;
  }

  .total_price {
    text-align: right;
    margin-top: 52px;
    font-size: 22px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  .add_to_cart_button {
    width: 100%;
    height: 56px;
    font-size: 18px;
    margin-top: 86px;
    margin-bottom: 100px;
    border-radius: 6px;
    color: #fff;
    background-color: #9abaff;

    &:hover {
      color: #fff;
      background-color: #b1c8f9;
    }
  }
`;
