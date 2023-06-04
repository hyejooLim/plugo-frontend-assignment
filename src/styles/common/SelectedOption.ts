import styled from 'styled-components';

export const SelectedOptionWrapper = styled.div`
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
