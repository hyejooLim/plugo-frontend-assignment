import styled from 'styled-components';

export const SizeSelectedZoneWrapper = styled.div`
  margin: 54px 0;

  p {
    font-size: 24px;
    font-weight: 300;
  }

  ul {
    margin-top: 20px;

    .size_button {
      width: 80px;
      height: 36px;
      font-size: 16px;
      background-color: #fff;
      cursor: pointer;

      &:hover {
        background-color: #e3e3e3;
      }
    }

    .size_button:not(:last-child) {
      margin-right: 10px;
    }
  }
`;
