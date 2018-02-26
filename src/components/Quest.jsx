import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Quest(props) {

  const link={
    textDecoration:'none',
    color: 'black'
  };
  return (
    <div>
      <style jsx>{`
        display: flex;
        flex-direction: column;

        .box {
          background: #eeeeee;
          border: 5px solid #ddd;
          padding: 25px;
        }

        margin: 10px;
        max-width: 400px;

        h2, h3{
          margin: 0 auto 15px;
          text-align: center;
        }
        p {
          margin: 0;
          text-align: center;
        }

        button {
          width: 45px;
        }
      `}</style>
      <div className='box'>
        <h2>{props.title}</h2>
        <h3>- {props.giver}</h3>
        <p><em>{props.description}</em></p>
        <p>Reward: {props.reward}</p>

        <Link style={link} to='/EditQuest'>
          <button>Edit</button>
        </Link>

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
