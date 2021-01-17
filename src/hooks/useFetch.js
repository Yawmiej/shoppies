/* eslint-disable consistent-return */
import { useRef } from 'react';

const BASE_URL = 'https://www.omdbapi.com/';
const API_KEY = 'b8494e06';
const TYPE = 'movie';

const useFetch = () => {
  const cache = useRef({});

  const fetchData = async (query) => {
    const url = `${BASE_URL}?apikey=${API_KEY}&type=${TYPE}&${query}`;
    if (!query) return;

    //  Check if data exist in cache and return
    if (cache.current[query]) {
      const result = cache.current[query];
      return [null, result];
    }

    try {
      const response = await fetch(url);

      if (!response.ok) throw await response.json();

      const result = await response.json();
      cache.current[query] = result;

      return [null, result];
    } catch (err) {
      return [err];
    }
  };

  return { fetchData };
};

export default useFetch;
