import React, { useMemo, useReducer } from 'react';
import Layout from './layout';
import { initialState, reducer } from './store/reducer';
import AppContext from './_context';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <AppContext.Provider value={contextValue}>
      <Layout />
    </AppContext.Provider>
  );
}

export default App;
