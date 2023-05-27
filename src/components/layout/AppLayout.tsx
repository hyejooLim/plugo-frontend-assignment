import { ReactNode } from 'react';
import { Layout } from 'antd';

import Navigation from './Navigation';
import { StyledLayout, StyledFooter } from '../../styles/layout/AppLayout';

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <StyledLayout>
      <Navigation />
      <Layout.Content>
        {children}
        <StyledFooter>Shopping App by @hyejooLim</StyledFooter>
      </Layout.Content>
    </StyledLayout>
  );
};

export default AppLayout;
