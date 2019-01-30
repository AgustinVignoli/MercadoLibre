import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash';

export default function BreadCrumbs({ filters }) {
  let breadCrumbs = [];
  if (!isEmpty(filters)) {
    const categories = filters[0].values[0];
    const paths = categories && categories.path_from_root;
    if (!isEmpty(categories) && paths) {
      breadCrumbs = paths.map(({ id, name }, index) => (
        <Link key={id} to={`/items/category?search=${id}`}>
          {name}
          {index < paths.length - 1 && <i className="icon-angle-right" />}
        </Link>
      ));
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-10 col-sm-offset-1 bread-crumbs">{breadCrumbs}</div>
      </div>
    </div>
  );
}

BreadCrumbs.propTypes = { filters: PropTypes.array.isRequired };
