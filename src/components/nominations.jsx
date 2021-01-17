import { Card, Layout } from '@shopify/polaris';
import React from 'react';

function Nominations() {
  return (
    <Layout.Section secondary>
      <Card title="Nominated Movies" sectioned>
        <p>No Nominated Movies Yet</p>
      </Card>
    </Layout.Section>
  );
}

export default Nominations;
