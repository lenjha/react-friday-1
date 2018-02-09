import React from 'react';
import PropTypes from 'prop-types';

function Quest(props) {
  return (
    <div>
      <h3>{props.title} - {props.giver}</h3>
      <p>{props.description}</p>
      {props.reward}
    </div>
  );
}

Quest.propTypes = {
  title: PropTypes.string.isRequired,
  giver: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reward: PropTypes.string.isRequired
};

export default Quest;
