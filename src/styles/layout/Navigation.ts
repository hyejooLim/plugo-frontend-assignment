import { Menu } from 'antd';
import styled from 'styled-components';

export const MenuWrapper = styled(Menu)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  padding: 40px 0 50px;
  position: sticky;
  top: 0;
  z-index: 1;

  & .menu_item {
    font-size: 22px;
    border-bottom: none;
  }
`;

export const ManageIconWrapper = styled.div`
  font-size: 28px;
  width: 54px;
  height: 54px;
  line-height: 54px;
  text-align: center;
  position: absolute;
  right: 50px;
  border-radius: 50%;

  &:hover {
    background-color: #ddd;
  }
`;
