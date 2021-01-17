import { Card, EmptyState, Layout } from '@shopify/polaris';
import React from 'react';

import emptyStateImage from '../assets/img/empty-state1.png';

function Nominations() {
  const emptyStateMarkup = (
    <Card.Section>
      <EmptyState heading="No Nominated Movies Yet" image={emptyStateImage}>
        <p>All your nominated movies will appear here</p>
      </EmptyState>
    </Card.Section>
  );

  return (
    <Layout.Section secondary>
      <Card title="Nominated Movies" sectioned>
        {emptyStateMarkup}
      </Card>
    </Layout.Section>
  );
}

export default Nominations;
