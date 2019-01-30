import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ProductListThumbnail({ props: { id, title, thumbnail } }) {
  return (
    <Link to={`/items/${id}`} tile={title}>
      <img src={thumbnail} alt={title} width="180px" height="180px" />
    </Link>
  );
}

ProductListThumbnail.propTypes = { props: PropTypes.object };
