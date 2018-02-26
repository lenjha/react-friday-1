import React from 'react';
import PropTypes from 'prop-types';

import Confirmation from './Confirmation';
import NewQuestForm from './NewQuestForm';

class NewQuestControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleConfirmation = this.handleConfirmation.bind(this);
  }

  handleConfirmation(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentContent = null;
    if (this.state.formVisibleOnPage){
      currentContent = <NewQuestForm onNewQuestCreation={this.props.onNewQuestCreation} />;
    } else {
      currentContent = <Confirmation onConfirmation={this.handleConfirmation} />;
    }
    return (
      <div>
        {currentContent}
      </div>
    );
  }

}

NewQuestControl.propTypes = {
  onNewQuestCreation: PropTypes.func
};

export default NewQuestControl;
