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

  .size_selected_zone {
    margin: 54px 0;

    p {
      font-size: 24px;
      font-weight: 300;
    }

    ul {
      margin-top: 20px;

      .size {
        width: 80px;
        height: 36px;
        font-size: 16px;
        background-color: #fff;
        cursor: pointer;

        &:hover {
          background-color: #e3e3e3;
        }
      }

      .size:not(:last-child) {
        margin-right: 10px;
      }
    }
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

export const SelectedOptionBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  padding: 10px 20px 14px;
  border-bottom: 1px solid #777;

  .size {
    font-size: 20px;
    font-family: 'Courier New';
    width: 105px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .close_icon {
    position: absolute;
    right: 0;
    font-size: 22px;
    color: #333;
    cursor: pointer;
  }
`;