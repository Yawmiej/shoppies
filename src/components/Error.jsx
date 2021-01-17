import { Banner } from '@shopify/polaris';
import React, { useContext } from 'react';
import { setError } from '../store/actions';
import AppContext from '../_context';

function Error() {
  const { state, dispatch } = useContext(AppContext);
  return state.error ? (
    <div className="error-banner">
      <Banner title={state.error.title} status="warning" onDismiss={() => dispatch(setError(null))}>
        <p>{state.error.body}</p>
      </Banner>
    </div>
  ) : null;
}

export default Error;
