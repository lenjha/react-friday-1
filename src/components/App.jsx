import React from 'react';
// import ReactDOM from 'react-dom';
import {Route, Switch } from 'react-router-dom';
import BulletinBoard from './BulletinBoard';
import Error404 from './Error404';
import Header from './Header';
import Home from './Home';
import Inventory from './Inventory';
import Hello from './Hello';
import EditQuest from './EditQuest';
import QuestList from './QuestList';
import NewQuestControl from './NewQuestControl';

class App extends React.Component() {

  constructor(props){
    super(props);
    this.state = {
      masterQuestList: []
    };
    this.handleAddingNewQuest = this.handleAddingNewQuest.bind(this);
  }

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     masterQuestList: [
  //       {
  //         title: 'Wander into Wonderland',
  //         giver: 'Eliza',
  //         description: 'Feed [Chocolate] to Flanders',
  //         reward: '[Kitchen Knife]'
  //       },
  //       {
  //         title: 'Come Fly With Me',
  //         giver: 'Alice',
  //         description: 'Find the [Carriage Pass]',
  //         reward: '[Empty Bottle]'
  //       },
  //       {
  //         title: 'Foggy Day',
  //         giver: 'Phaestus',
  //         description: 'Find a friend for Phaestus',
  //         reward: '3 Acorns'
  //       },
  //       {
  //         title: 'Paper Faces on Parade',
  //         giver: 'Leroux',
  //         description: 'Catch the Phantom',
  //         reward: '[Circus Ticket]'
  //       },
  //       {
  //         title: 'Mock Oranges',
  //         giver: 'Quixote',
  //         description: 'Disable the windmill',
  //         reward: '2 Comfits'
  //       },
  //       {
  //         title: 'Bread and Circuses',
  //         giver: 'Maddy',
  //         description: 'Uncover the mystery of the Big Top',
  //         reward: '4 Buttons'
  //       }
  //     ]
  //   };
  // }

  handleAddingNewQuest(newQuest){
    var newMastQuestList = this.state.masterQuestList.slice();
    newMastQuestList.push(newQuest);
    this.setState({masterQuestList: newMastQuestList});
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
          <Route path='/BulletinBoard' component={BulletinBoard} />
          <Route path='/Inventory' component={Inventory} />
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
