import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash';
import queryString from 'query-string';
import SearchButton from './searchButton';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    const { location: { search: query } } = this.props;
    const { search } = queryString.parse(query);
    this.state = { search: search || '' };
  }

  handleChange = (event) => {
    const { target: { value } } = event;
    this.setState({ search: value });
  };

  handleKeyPress = (event) => {
    let { history } = this.props;
    const { search } = this.state;

    if (event.key === 'Enter' && !isEmpty(search)) {
      history.push(`/items?search=${search}`);
    }
  };

  render() {
    const { search } = this.state;

    return (
      <div className="search-bar container-fluid">
        <div className="container">
          <div className="row">
            <div className="search-bar__logo col-xs-12 col-sm-2">
              <Link to="/" />
            </div>
            <div className="search-bar__input col-xs-12 col-sm-8">
              <input type="text" value={search} onChange={e => this.handleChange(e)} onKeyPress={e => this.handleKeyPress(e)} />
              <SearchButton search={search} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
};