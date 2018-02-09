import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Error404(props) {
  console.log(props);
  return (
    <div>
      <style jsx>{`
        background: red;
      `}</style>
      ERROR 404
      <h4>The page {props.location.pathname} does not exist.</h4>
      Click <Link to="/">here</Link> to return.
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;