import React from 'react';
import { Layout } from '@shopify/polaris';
import Movies from './movies';
import Nominations from './nominations';

export default function Body() {
  return (
    <div style={{ padding: '2rem' }}>
      <Layout>
        <Movies />
        <Nominations />
      </Layout>
    </div>
  );
}
