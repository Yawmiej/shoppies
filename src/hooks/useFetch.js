/* eslint-disable consistent-return */
import { useEffect, useReducer, useRef } from 'react';

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const useFetch = (url) => {
  const cache = useRef({});
  const [fetchState, dispatch] = useReducer((state = initialState, action) => {
    switch (action.type) {
      case 'Loading':
        return { ...state, loading: true };
      case 'LoadData':
        return { ...state, loading: false, data: action.payload };
      case 'LoadError':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  }, initialState);

  useEffect(() => {
    let cancelRequest = false;
    if (!url) return;

    const fetchData = async () => {
      dispatch({ type: 'Loading' });

      //  Check if data exist in cache and return
      if (cache.current[url]) {
        const result = cache.current[url];
        dispatch({ type: 'LoadData', payload: result });
      } else {
        try {
          const response = await fetch(url);
          const result = response.json();
          cache.current[url] = result;
          if (cancelRequest) return;
          dispatch({ type: 'LoadData', payload: result });
        } catch (err) {
          dispatch({ type: 'LoadError', payload: err });
          return err;
        }
      }
    };

    fetchData();

    return function cleanup() {
      cancelRequest = true;
    };
  }, [url]);

  return fetchState;
};

export default useFetch;
