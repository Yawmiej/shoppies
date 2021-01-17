export const SET_PAGE_LOADING = 'SET_PAGE_LOADING';
export const SET_MOVIES_LIST = 'SET_MOVIES_LIST';
export const ADD_TO_NOMINATION = 'ADD_TO_NOMINATION';
export const REMOVE_NOMINATION = 'REMOVE_NOMINATION';
export const SET_ERROR = 'SET_ERROR';

export function setPageLoading(payload) {
  return { type: SET_PAGE_LOADING, payload };
}

export function setMoviesList(payload) {
  return { type: SET_MOVIES_LIST, payload };
}

export function addToNomination(payload) {
  return { type: ADD_TO_NOMINATION, payload };
}

export function removeNomination(payload) {
  return { type: REMOVE_NOMINATION, payload };
}

export function setError(payload) {
  return { type: SET_ERROR, payload };
}
