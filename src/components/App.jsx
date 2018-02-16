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
import NewQuestControl from './NewQuestControl';

function App() {
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
        <Route path='/EditQuest' component={EditQuest} />
        <Route path='/NewQuestControl' component={NewQuestControl} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
