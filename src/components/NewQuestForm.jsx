import React from 'react';
import PropTypes from 'prop-types';

// function NewQuestForm(props){
//   let _titles = null;
//   let _givers = null;
//   let _description = null;
//   let _reward = null;
//
//   function handleNewQuestFormSubmission(event){
//     event.preventDefault();
//     props.onNewQuestCreation({titles: _titles.value, givers: _givers.value, descriptions: _description.value, rewards: _reward.value});
//   }
//
//   return(
//     <div>
//       <form onSubmit={handleNewQuestFormSubmission}>
//         <input
//           type='text'
//           id='titles'
//           placeholder='Enter Quest Title'
//           ref={(input) => {_titles = input;}}/>
//         <input
//           type='text'
//           id='givers'
//           placeholder='Enter Giver Names'
//           ref={(input) => {_givers = input;}}/>
//         <input
//           type='text'
//           id='descriptions'
//           placeholder='Enter Quest Description'
//           ref={(input) => {_description = input;}}/>
//         <input
//           type='text'
//           id='rewards'
//           placeholder='Enter Quest Reward'
//           ref={(input) => {_reward = input;}}/>
//       </form>
//     </div>
//   );
// }

function NewQuestForm(){
  let _title = null;
  let _givers = null;
  let _description = null;
  let _rewards = null;

  function handleNewQuestFormSubmission(event){
    event.preventDefault();
    console.log(_title.value);
    console.log(_givers.value);
    console.log(_description.value);
    console.log(_rewards.value);
    _title.value='';
    _givers.value='';
    _description.value='';
    _rewards.value='';
  }

  return (
    <div>
      <form onSubmit={handleNewQuestFormSubmission}>
        <input
          type='text'
          id='title'
          placeholder='Quest Title'
          ref={(input) => {_title = input;}}/>
        <input
          type='text'
          id='givers'
          placeholder='Quest Givers'
          ref={(input) => {_givers = input;}}/>
        <input
          type='text'
          id='description'
          placeholder='Quest Description'
          ref={(input) => {_description = input;}}/>
        <input
          type='text'
          id='rewards'
          placeholder='Quest Rewards'
          ref={(input) => {_rewards = input;}}/>
      </form>
    </div>
  );
}

NewQuestForm.propTypes = {
  onNewQuestCreation: PropTypes.func
};

export default NewQuestForm;
