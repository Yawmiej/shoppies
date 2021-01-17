import React, { useCallback, useContext, useState } from 'react';
import { ActionList, TopBar } from '@shopify/polaris';
import useFetch from '../hooks/useFetch';
import AppContext from '../_context';
import { setError, setMoviesList, setPageLoading } from '../store/actions';

function Header() {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const { fetchData } = useFetch();
  const { dispatch } = useContext(AppContext);

  const handleSearchChange = useCallback((value) => {
    setSearchValue(value);
    setIsSearchActive(value.length > 0);
  }, []);

  const searchFieldMarkup = (
    <TopBar.SearchField
      onChange={handleSearchChange}
      value={searchValue}
      placeholder="Search for movies"
      showFocusBorder
    />
  );

  const searchResultAction = useCallback(async () => {
    if (!searchValue) return;
    setIsSearchActive(false);

    dispatch(setPageLoading(true));

    const [err, result] = await fetchData(`s=${searchValue}`);
    if (err) {
      dispatch(setError({ title: err.Error, body: '' }));
    } else dispatch(setMoviesList(result));
  }, [searchValue]);

  const searchResultMarkup = (
    <ActionList items={[{ content: `Search: ${searchValue}`, onAction: searchResultAction }]} />
  );

  const handleSearchResultsDismiss = useCallback(() => {
    setIsSearchActive(false);
  }, []);

  return (
    <TopBar
      searchResultsVisible={isSearchActive}
      searchField={searchFieldMarkup}
      searchResults={searchResultMarkup}
      onSearchResultsDismiss={handleSearchResultsDismiss}
    />
  );
}

export default Header;
