import React from 'react';
import { Button, Frame } from '@shopify/polaris';
import Header from './components/header';
import Body from './components/body';

function Layout() {
  return (
    <Frame>
      <Header />
      <Body />
      <Button primary>OMo</Button>
    </Frame>
  );
}

export default Layout;
