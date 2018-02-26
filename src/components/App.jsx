import React from 'react';
// import ReactDOM from 'react-dom';
import {Route, Switch } from 'react-router-dom';
// import BulletinBoard from './BulletinBoard';
import Error404 from './Error404';
import Header from './Header';
import Home from './Home';
// import Inventory from './Inventory';
import Hello from './Hello';
import EditQuest from './EditQuest';
import QuestList from './QuestList';
import NewQuestControl from './NewQuestControl';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      masterQuestList: []
    };
    this.handleAddingNewQuest = this.handleAddingNewQuest.bind(this);
  }

  handleAddingNewQuest(newQuest){
    var newMasterQuestList = this.state.masterQuestList.slice();
    newMasterQuestList.push(newQuest);
    this.setState({masterQuestList: newMasterQuestList});
  }

  render(){
    return (
      <div>
        <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Indie+Flower|Permanent+Marker');
        font-family: monospace;

      `}</style>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/QuestList' render={()=><QuestList questList={this.state.masterQuestList} />}/>
          <Route path='/Hello' component={Hello} />
          <Route path='/NewQuest' render={()=><NewQuestControl onNewQuestCreation={this.handleAddingNewQuest} />} />
          <Route path='/EditQuest' component={EditQuest} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
