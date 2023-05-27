import styled from 'styled-components';

export const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CounterInput = styled.input`
  margin-right: 8px;
  width: 100px;
  height: 38px;
  text-align: center;
`;

export const CounterButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;

  button {
    font-size: 15px;
    width: 28px;
    height: 20px;
    background-color: #9abaff;
    border-radius: 6px;
    cursor: pointer;

    &:disabled {
      cursor: default;
    }

    &:first-child {
      margin-bottom: 2px;
    }
  }
`;
