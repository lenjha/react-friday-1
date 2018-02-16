import React from 'react';
import NewQuestForm from './NewQuestForm';
import AddButton from './AddButton';

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
    alert('visibleOnPage is now: ' + this.state.visibleOnPage);
  }

  render(){
    let currentlyVisible = null;
    if (this.state.visibleOnPage){
      currentlyVisible = <NewQuestForm />;
    } else {
      currentlyVisible = <AddButton onAddQuestConfirmation={this.handleAddQuestConfirmation} />;
    }
    return(
      <div>
        {currentlyVisible}
      </div>
    );
  }

  // render(){
  //   return(
  //     <div>
  //       <p>NEW QUEST CONTROL!</p>
  //       <p onClick={this.handleClick}>Click!</p>
  //     </div>
  //   );
  // }
}

export default NewQuestControl;
