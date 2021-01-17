import { SET_MOVIES_LIST, ADD_TO_NOMINATION } from './actions';

export const initialState = {
  movies: [],
  nominations: [],
};

const setMovies = (state, payload) => ({ ...state, movies: [...payload] });

const addToNomination = (state, payload) => ({
  state,
  nominations: [payload, ...state.nominations],
});

export function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_MOVIES_LIST:
      return setMovies(state, payload);
    case ADD_TO_NOMINATION:
      return addToNomination(state, payload);
    default:
      return state;
  }
}
