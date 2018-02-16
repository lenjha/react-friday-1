import React from 'react';
import PropTypes from 'prop-types';

function AddButton(){
  return (
    <div>
      <button>ADD</button>
    </div>
  );
}

AddButton.propTypes = {
  onAddQuestConfirmation: PropTypes.func
};

export default AddButton;
