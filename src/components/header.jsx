import React, { useCallback, useState } from 'react';
import { ActionList, Frame, TopBar } from '@shopify/polaris';

function Header() {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState('');

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

  const searchResultAction = useCallback(() => {
    console.log(searchValue);
  }, [searchValue]);

  const searchResultMarkup = (
    <ActionList items={[{ content: `Search: ${searchValue}`, onAction: searchResultAction }]} />
  );

  const handleSearchResultsDismiss = useCallback(() => {
    setIsSearchActive(false);
    setSearchValue('');
  }, []);

  const topBarMarkup = (
    <TopBar
      searchResultsVisible={isSearchActive}
      searchField={searchFieldMarkup}
      searchResults={searchResultMarkup}
      onSearchResultsDismiss={handleSearchResultsDismiss}
    />
  );

  return <Frame topBar={topBarMarkup} />;
}

export default Header;
