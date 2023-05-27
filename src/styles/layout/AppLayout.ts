import { Layout } from 'antd';
import styled from 'styled-components';

const { Footer } = Layout;

export const StyledLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: scroll;
  background-color: #f1f1f1;
`;

export const StyledFooter = styled(Footer)`
  width: 100%;
  font-size: 14px;
  position: relative;
  margin-top: 50px;
  color: #666;
  text-align: center;
  background-color: transparent;
`;
