import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { isEmpty } from 'lodash';

function SearchButton(props) {
  const handleClick = (history, search) => {
    if (!isEmpty(search)) {
      history.push(`/items?search=${search}`);
    }
  };

  return (
    <Route
      render={({ history }) => (
        <button
          type="button"
          className="search-bar__button"
          onClick={() => handleClick(history, props.search)}
        />
      )}
    />
  );
}

SearchButton.propTypes = { search: PropTypes.string };

export default SearchButton;
