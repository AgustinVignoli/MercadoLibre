import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { isEmpty } from 'lodash';
import { loadSearchResults } from '../actions/searchActions';
import SearchBar from './searchBar';
import SearchResultsList from './searchResultsList';
import BreadCrumbs from './breadCrumbs';

class SearchList extends Component {
  componentDidMount() {
    const {
      location: { search: query, pathname },
      onLoadSearchResults,
    } = this.props;
    const { search } = queryString.parse(query);

    if (!isEmpty(search)) {
      onLoadSearchResults(search, pathname);
    }
  }

  componentDidUpdate(prevProps) {
    const { location: { search: prevQuery } } = prevProps;
    const {
      location: { search: query, pathname },
      onLoadSearchResults,
    } = this.props;
    const { search } = queryString.parse(query);

    if (query !== prevQuery && !isEmpty(search)) {
      onLoadSearchResults(search, pathname);
    }
  }

  render() {
    const { isLoaded, searchResults: results, filters } = this.props;

    return (
      <Fragment>
        <SearchBar {...this.props} />
        {isLoaded && <BreadCrumbs filters={filters} />}
        <section className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-10 col-sm-offset-1 search-results">
              {!isLoaded && 'Cargando...'}
              {results && isLoaded && <SearchResultsList results={results} />}
              {!results && isLoaded && 'No hay resultados'}
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

SearchList.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
};

const mapStateToProps = (state) => {
  const { searchReducer: { searchResults, filters, isLoaded, errors } } = state;

  return {
    searchResults: !isEmpty(searchResults) ? searchResults : null,
    filters: filters || [],
    isLoaded: isLoaded || false,
    errors,
  };
};

const mapDispatchToProps = dispatch => ({
  onLoadSearchResults(search, pathname) {
    dispatch(loadSearchResults(search, pathname));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchList);
