import React, { useCallback, useContext, useState } from 'react';
import { ActionList, TopBar } from '@shopify/polaris';
import useFetch from '../hooks/useFetch';
import AppContext from '../_context';
import { setMoviesList, setPageLoading } from '../store/actions';

function Header() {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const { fetchData } = useFetch();
  const { state, dispatch } = useContext(AppContext);

  console.log(state);

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
    if (!err) dispatch(setMoviesList(result));
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
