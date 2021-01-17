import React, { useContext } from 'react';
import { Button, Frame, Loading } from '@shopify/polaris';

import Header from './components/header';
import Body from './components/body';
import AppContext from './_context';

function Layout() {
  const { state } = useContext(AppContext);

  const loadingMarkup = state.pageLoading ? <Loading /> : null;

  return (
    <Frame>
      <Header />
      {loadingMarkup}
      <Body />
      <Button primary>OMo</Button>
    </Frame>
  );
}

export default Layout;
