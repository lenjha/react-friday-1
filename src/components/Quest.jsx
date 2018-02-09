import React from 'react';
import PropTypes from 'prop-types';

function Quest(props) {
  return (
    <div>
      <style jsx>{`
        display: flex;
        flex-direction: column;

        background: lightsteelblue;
        margin: 30px;
        max-width: 400px;

        h2, h3{
          margin: 0 auto 15px;
          text-align: center;
        }
        p {
          margin: 0;
          text-align: center;
        }
      `}</style>
      <div>
        <h2>{props.title}</h2>
        <h3>- {props.giver}</h3>
        <p><em>{props.description}</em></p>
        <p>Reward: {props.reward}</p>

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
