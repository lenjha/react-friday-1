import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewQuestForm(props){
  let _title = null;
  let _givers = null;
  let _description = null;
  let _location = null;

  function handleNewQuestFormSubmission(event){
    event.preventDefault();
    props.onNewQuestCreation({title: _title.value, givers: _givers.value, description: _description.value, location: _location.value, id:v4()});
    _title.value='';
    _givers.value='';
    _description.value='';
    _location.value='';
  }

  return (
    <div>
      <form onSubmit={handleNewQuestFormSubmission}>
        <input
          type='text'
          id='title'
          placeholder='Quest Title'
          ref={(input) => {_title = input;}}/><br></br>
        <input
          type='text'
          id='givers'
          placeholder='Quest Givers'
          ref={(input) => {_givers = input;}}/><br></br>
        <input
          type='text'
          id='location'
          placeholder='Quest Location'
          ref={(input) => {_location = input;}}/><br></br>
        <input
          type='text'
          id='description'
          placeholder='Quest Description'
          ref={(input) => {_description = input;}}/><br></br>
      </form>
    </div>
  );
}

NewQuestForm.propTypes = {
  onNewQuestCreation: PropTypes.func
};

export default NewQuestForm;
