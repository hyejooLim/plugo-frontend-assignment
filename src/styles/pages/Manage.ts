import styled from 'styled-components';

export const ManageWrapper = styled.div`
  height: 83%;

  .content_container {
    width: 620px;
    height: 300px;
    margin: 0 auto;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .center_area {
    display: flex;
    align-items: center;
  }

  .login_button {
    width: 100%;
    height: 50px;
    margin-left: 20px;
    font-size: 18px;
    color: #fff;
    background-color: #62b9a9;
  }

  .create_product_button {
    margin-top: 80px;
    padding: 20px 60px;
    font-size: 22px;
    background-color: #fff;
    border: 1px solid #c6c6c6;
    border-radius: 6px;

    &:hover {
      border: 1px solid #666;
    }
  }
`;
