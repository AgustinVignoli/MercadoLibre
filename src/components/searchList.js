import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { isEmpty } from 'lodash';
import { loadSearchResults } from '../actions/searchActions';
import SearchBar from './searchBar';
import SearchResultsList from './searchResultsList';

class SearchList extends Component {
  constructor(props) {
    super(props);

    this.state = { results: null };
  }

  componentDidMount() {
    const {
      location: { search: query },
      onLoadSearchResults,
    } = this.props;
    const { search } = queryString.parse(query);

    if (!isEmpty(search)) {
      onLoadSearchResults(search);
    }
  }

  componentDidUpdate(prevProps) {
    const {
      location: { search: prevQuery },
      searchResults: prevSearchResults,
    } = prevProps;
    const {
      location: { search: query },
      onLoadSearchResults,
      searchResults,
    } = this.props;
    const { search } = queryString.parse(query);

    if (query !== prevQuery && !isEmpty(search)) {
      onLoadSearchResults(search);
    }

    if (searchResults !== prevSearchResults) {
      this.setState({ results: searchResults });
    }
  }

  render() {
    const { results } = this.state;
    const { isLoaded } = this.props;

    return (
      <Fragment>
        <SearchBar {...this.props} />
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-10 col-sm-offset-1 search-results">
              {!isLoaded && 'Cargando...'}
              {results && isLoaded && <SearchResultsList results={results} />}
              {!results && isLoaded && 'No hay resultados'}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

SearchList.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
};

const mapStateToProps = (state) => {
  const { searchReducer: { searchResults, isLoaded, errors } } = state;

  return {
    searchResults: !isEmpty(searchResults) ? searchResults : null,
    isLoaded: isLoaded || false,
    errors,
  };
};

const mapDispatchToProps = dispatch => ({
  onLoadSearchResults(search) {
    dispatch(loadSearchResults(search));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchList);
