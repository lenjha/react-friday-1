import React from 'react';
import NewQuestForm from './NewQuestForm';

class NewQuestControl extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			formVisibleOnPage: false
		};
		//this.handleClick = this.handleClick.bind(this);
		// bind the method handler to instance of the component
	}

	//method handler
	// handleClick(){
	// 	this.setState({formVisibleOnPage: true});
	// 	console.log("formVisibleOnPage has been set to: " + this.state.formVisibleOnPage);
	// }

	render(){
	    let currentContent = null;
	    if (this.state.formVisibleOnPage){
	      currentContent = <NewQuestForm />;
	    } else {
				currentContent = <Confirmation />;
			}
	    return (
	      <div>
	        {currentContent}
	      </div>
	    );
	  }
	}

export default NewQuestControl;
