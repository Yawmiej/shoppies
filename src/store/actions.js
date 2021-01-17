export const SET_PAGE_LOADING = 'SET_PAGE_LOADING';
export const SET_MOVIES_LIST = 'SET_MOVIES_LIST';
export const ADD_TO_NOMINATION = 'ADD_TO_NOMINATION';

export function setPageLoading(payload) {
  return { type: SET_PAGE_LOADING, payload };
}

export function setMoviesList(payload) {
  return { type: SET_MOVIES_LIST, payload };
}
