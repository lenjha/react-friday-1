import React from 'react';

function NewQuestForm(){
  let _title = null;
  let _giver = null;
  let _description = null;
  let _reward = null;

  function handleNewQuestSubmission(event){
    event.preventDefault();
    console.log(_title);
    console.log(_giver);
    console.log(_description);
    console.log(_reward);
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

export default NewQuestForm;
