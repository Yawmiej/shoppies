import { SET_MOVIES_LIST, ADD_TO_NOMINATION, SET_PAGE_LOADING } from './actions';

export const initialState = {
  pageLoading: false,
  movies: {},
  nominations: {},
};

const setPageLoading = (state, payload) => ({ ...state, pageLoading: payload });

const setMovies = (state, payload) => ({ ...state, movies: payload, pageLoading: false });

const addToNomination = (state, payload) => ({
  ...state,
  nominations: { ...state.nominations, [payload.imdbID]: payload },
});

export function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_PAGE_LOADING:
      return setPageLoading(state, payload);
    case SET_MOVIES_LIST:
      return setMovies(state, payload);
    case ADD_TO_NOMINATION:
      return addToNomination(state, payload);
    default:
      return state;
  }
}
