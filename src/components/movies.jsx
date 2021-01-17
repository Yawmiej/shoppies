import { Card, Layout } from '@shopify/polaris';
import React, { useContext } from 'react';
import AppContext from '../_context';
import LoadingSkeleton from './loadingSkeleton';

function Movies() {
  const { state } = useContext(AppContext);
  const moviesMarkup = !state.pageLoading ? <LoadingSkeleton /> : <p>Empty State for Movies</p>;
  return (
    <Layout.Section>
      <Card title="All Movies" sectioned>
        {moviesMarkup}
      </Card>
    </Layout.Section>
  );
}

export default Movies;
