import React from 'react';
import PropTypes from 'prop-types';

function SearchButton({ handleClick, history, search }) {
  return (
    <button
      type="button"
      className="search-bar__button"
      onClick={() => handleClick(history, search)}
    />
  );
}

SearchButton.propTypes = {
  handleClick: PropTypes.func,
  history: PropTypes.object,
  search: PropTypes.string,
};

export default SearchButton;
