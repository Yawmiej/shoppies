import { Card, EmptyState, Layout } from '@shopify/polaris';
import React, { useContext } from 'react';

import emptyStateImage from '../assets/img/empty-state1.png';
import getObjectLength from '../utils';
import AppContext from '../_context';
import NominationsList from './nominationsList';

function Nominations() {
  const { state } = useContext(AppContext);
  const emptyStateMarkup = (
    <Card.Section>
      <EmptyState heading="No Nominated Movies Yet" image={emptyStateImage}>
        <p>All your nominated movies will appear here</p>
      </EmptyState>
    </Card.Section>
  );

  const nominationsMarkup =
    getObjectLength(state.nominations) === 0 ? emptyStateMarkup : <NominationsList />;

  return (
    <Layout.Section secondary>
      <Card title="Nominated Movies" sectioned>
        {nominationsMarkup}
      </Card>
    </Layout.Section>
  );
}

export default Nominations;
