import React from 'react';
// import ReactDOM from 'react-dom';
import {Route, Switch } from 'react-router-dom';

// import BulletinBoard from './BulletinBoard';
import Error404 from './Error404';
import Header from './Header';
import Home from './Home';
// import Inventory from './Inventory';
// import Hello from './Hello';
// import EditQuest from './EditQuest';
import QuestList from './QuestList';
import NewQuestControl from './NewQuestControl';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      masterQuestList: []
    };
    this.handleAddNewQuestToList = this.handleAddNewQuestToList.bind(this);
  }

  handleAddNewQuestToList(newQuest){
    let newMasterQuestList = this.state.masterQuestList.slice();
    newMasterQuestList.push(newQuest);
    this.setState({masterQuestList: newMasterQuestList});
  }

  render(){
    return (
      <div>
        <style jsx>{`
          @import url('https://fonts.googleapis.com/css?family=Indie+Flower|Permanent+Marker');
          font-family: monospace;

          display: flex;
          flex-direction: column;

          .quests{
            flex-wrap: wrap;
            flex-direction: row;
          }
          p {
            margin: 1px;
            text-align: center;
          }
          em {
            padding: 50px;
            color: #eeeeee;
          }
          h3 {
            text-align: center;
          }
        `}</style>

        <Header />
        <Switch>
          <Route exact path='/' render={()=><QuestList questList={this.state.masterQuestList} />} component={Home} />
          <Route path='/newquest' render={()=><NewQuestControl onNewQuestCreation={this.handleAddingNewQuestToList} />} />
          <Route component={Error404} />
        </Switch>

        <div className='background'>
          <h3>entreaties & solicitations</h3>
          <div className='quests'>
            <QuestList />
          </div>
          <em><p>In the house of upside-down,</p>
            <p>Cellar's top-floor, attic's ground</p>
            <p>In the house of upside-down,</p>
            <p>Laughing cries and smiles frown,</p>
            <p>In the house of upside-down,</p>
            <p>Found is lost, and lost is found</p></em>
        </div>
      </div>
    );
  }
}

export default App;
