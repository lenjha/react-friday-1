import React from 'react';
import PropTypes from 'prop-types';

function Quest(props) {
  return (
    <div>
      <style jsx>{`
        background: lightsteelblue;
        margin: 30px;

        h3{
          margin: 0;
        }
      `}</style>
      <div style={{margin:'10px'}}>
        <h3>{props.title} - {props.giver}</h3>
        <p>{props.description}</p>
        <p>{props.reward}</p>

      </div>
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
