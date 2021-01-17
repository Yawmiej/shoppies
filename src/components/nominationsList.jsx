import { Card } from '@shopify/polaris';
import React, { useContext } from 'react';
import { removeNomination } from '../store/actions';
import AppContext from '../_context';

function NominationsList() {
  const { state, dispatch } = useContext(AppContext);

  const handleCardAction = (movie) => dispatch(removeNomination(movie));

  const renderMovie = (movie) => (
    <Card.Section
      title={movie.Title}
      key={movie.imdbID}
      actions={[{ content: 'Remove', destructive: true, onAction: () => handleCardAction(movie) }]}
    >
      <p>{`(${movie.Year})`}</p>
    </Card.Section>
  );

  return <div className="nominations">{Object.values(state.nominations).map(renderMovie)}</div>;
}

export default NominationsList;
