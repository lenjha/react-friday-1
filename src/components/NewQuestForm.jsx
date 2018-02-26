import React from 'react';
import PropTypes from 'prop-types';

function NewQuestForm(props){
  let _title = null;
  let _giver = null;
  let _description = null;
  let _reward = null;

  function handleNewQuestSubmission(event){
    event.preventDefault();
    props.onNewQuestCreation({title: _title.value, giver: _giver.value, description: _description.value, reward: _reward.value});
    _title = '';
    _giver = '';
    _description = '';
    _reward = '';
  }

  return (
    <div>
      <form onSubmit={handleNewQuestSubmission}>
        <input
          type='text'
          id='title'
          placeholder='Title'
          ref={(input) => {_title = input;}}/>
        <input
          type='text'
          id='giver'
          placeholder='Giver'
          ref={(input) => {_giver = input;}}/>
        <input
          type='text'
          id='description'
          placeholder='Description'
          ref={(input) => {_description = input;}}/>
        <input
          type='text'
          id='reward'
          placeholder='Reward'
          ref={(input) => {_reward = input;}}/>
        <button type='submit'>SUBMIT</button>
      </form>
    </div>
  );
}

NewQuestForm.propTypes = {
  onNewQuestCreation: PropTypes.func
};

export default NewQuestForm;
