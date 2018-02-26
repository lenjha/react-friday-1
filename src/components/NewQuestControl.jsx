import React from 'react';
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
	      currentContent = <NewQuestForm />;
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

export default NewQuestControl;
