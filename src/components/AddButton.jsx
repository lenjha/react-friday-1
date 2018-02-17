import React from 'react';
import PropTypes from 'prop-types';

function AddButton(props){
  return (
    <div>
      <button onClick={props.onAddQuestConfirmation}>ADD</button>
    </div>
  );
}

AddButton.propTypes = {
  onAddQuestConfirmation: PropTypes.func
};

export default AddButton;
