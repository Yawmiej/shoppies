import { Card, Layout } from '@shopify/polaris';
import React, { useContext } from 'react';
import AppContext from '../_context';
import LoadingSkeleton from './loadingSkeleton';
import MoviesList from './moviesList';

function Movies() {
  const { state } = useContext(AppContext);
  const moviesMarkup = state.pageLoading ? <LoadingSkeleton /> : <MoviesList />;

  return (
    <Layout.Section>
      <Card title="All Movies" sectioned>
        {moviesMarkup}
      </Card>
    </Layout.Section>
  );
}

export default Movies;
