import getObjectLength from '../utils';
import {
  SET_MOVIES_LIST,
  ADD_TO_NOMINATION,
  SET_PAGE_LOADING,
  REMOVE_NOMINATION,
  SET_ERROR,
} from './actions';

export const initialState = {
  pageLoading: false,
  movies: {},
  nominations: {},
  error: null,
};

const setPageLoading = (state, payload) => ({ ...state, pageLoading: payload });

const setMovies = (state, payload) => ({
  ...state,
  movies: payload,
  pageLoading: false,
  error: null,
});

const addToNomination = (state, payload) => {
  const MAXIMUM_NOMINATIONS = 5;
  const nominationsLength = getObjectLength(state.nominations);

  if (nominationsLength === MAXIMUM_NOMINATIONS) {
    return {
      ...state,
      error: {
        title: 'Maximum Nominations',
        body: 'You have a maximum of 5 movie nominations. Remove nominated movies to add more.',
      },
    };
  }

  return {
    ...state,
    nominations: { ...state.nominations, [payload.imdbID]: payload },
  };
};

const removeNomination = (state, payload) => {
  const nominations = { ...state.nominations };
  delete nominations[payload.imdbID];

  return { ...state, nominations: { ...nominations }, error: null };
};

const setError = (state, payload) => ({ ...state, error: payload, pageLoading: false });

export function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_PAGE_LOADING:
      return setPageLoading(state, payload);
    case SET_ERROR:
      return setError(state, payload);
    case SET_MOVIES_LIST:
      return setMovies(state, payload);
    case ADD_TO_NOMINATION:
      return addToNomination(state, payload);
    case REMOVE_NOMINATION:
      return removeNomination(state, payload);
    default:
      return state;
  }
}
