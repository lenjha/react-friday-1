import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Error404(props) {
  return (
    <div>
      <style jsx>{`
        background: crimson;
      `}</style>
      <h4>The page {props.location.pathname} does not exist.</h4>
      <p>Click <Link to="/">here</Link> to return.</p>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;
