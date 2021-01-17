import React, { useCallback, useState } from 'react';
import { ActionList, TopBar } from '@shopify/polaris';
import useFetch from '../hooks/useFetch';

function Header() {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const { fetchData } = useFetch();

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
    await fetchData(`s=${searchValue}`);
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
