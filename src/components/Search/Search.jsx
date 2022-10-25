// Global
import React from 'react';

// UI
import SearchIcon from '../../UI/icons/search.svg';

// Styles
import './Search.less';

const Search = (props) => {
  return (
    <div className="Search">
      <input
        placeholder="Search!"
        onChange={(event) => props.onChange(event.target.value)}
      />
      <img src={SearchIcon} className="search-icon" alt="Search" />
    </div>
  );
};

export default Search;
