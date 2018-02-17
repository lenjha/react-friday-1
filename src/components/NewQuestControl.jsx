import React from 'react';
import NewQuestForm from './NewQuestForm';
import AddButton from './AddButton';
import PropTypes from 'prop-types';

class NewQuestControl extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      visibleOnPage: false
    };
    this.handleAddQuestConfirmation = this.handleAddQuestConfirmation.bind(this);
  }

  handleAddQuestConfirmation(){
    this.setState({visibleOnPage: true});
  }

  render(){
    let currentlyVisible = null;
    if (this.state.visibleOnPage){
      currentlyVisible = <NewQuestForm onNewQuestCreation={this.props.onNewQuestCreation}/>;
    } else {
      currentlyVisible = <AddButton onAddQuestConfirmation={this.handleAddQuestConfirmation} />;
    }
    return(
      <div>
        <p>New Quest Control!</p>
        {currentlyVisible}
      </div>
    );
  }
}

NewQuestControl.propTypes = {
  onNewQuestCreation: PropTypes.func
};

export default NewQuestControl;
