import React from 'react';
import PropTypes from 'prop-types';

function Quest(props) {
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
        <h3>- {props.givers}</h3>
        <p><em>{props.description}</em></p>
        <p>{props.location}</p>

        <button>Edit!</button>
      </div>
    </div>
  );
}

Quest.propTypes = {
  title: PropTypes.string.isRequired,
  givers: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
};

export default Quest;
