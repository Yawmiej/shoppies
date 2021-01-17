import React, { useCallback, useContext } from 'react';
import { EmptyState, MediaCard } from '@shopify/polaris';

import AppContext from '../_context';
import { addToNomination } from '../store/actions';

function MoviesList() {
  const { state, dispatch } = useContext(AppContext);

  const emptyStateMarkup = (
    <EmptyState
      heading="Search a movie to nominate"
      image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
    >
      <p>All your nominated movies will appear here</p>
    </EmptyState>
  );

  const handleCardAction = useCallback((movie) => {
    dispatch(addToNomination(movie));
  }, []);

  const renderMovie = (movie) => (
    <div className="movie-card media" key={movie.imdbID}>
      <MediaCard
        portrait
        title={movie.Title}
        description={`(${movie.Year})`}
        primaryAction={{
          content: 'Nominate',
          onAction: () => handleCardAction(movie),
          disabled: !!state.nominations[movie.imdbID],
        }}
      >
        <img
          src={movie.Poster}
          alt={movie.Title}
          height="150px"
          width="100%"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </MediaCard>
    </div>
  );

  return state.movies.Search ? (
    <div className="center-flex">
      <div className="flex-row media">{state.movies?.Search?.map(renderMovie)}</div>
    </div>
  ) : (
    emptyStateMarkup
  );
}
export default MoviesList;
