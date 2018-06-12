import React from 'react';
import PropTypes from 'prop-types';

import './SearchBar.css';

const SearchBar = ({ value, onChange, onSubmit }) => (
  <div className="searchbar">
    <input
      value={value}
      placeholder="Search flickr images..."
      onChange={e => onChange(e)}
    />
    <button onClick={() => onSubmit()}>Search</button>
  </div>
);

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
