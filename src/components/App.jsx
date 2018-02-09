import React from 'react';
// import ReactDOM from 'react-dom';
import {Route, Switch } from 'react-router-dom';
import BulletinBoard from './BulletinBoard';
import Error404 from './Error404';
import Header from './Header';
import Home from './Home';

function App() {
  return (
    <div>
      <style jsx>{`
          @import url('https://fonts.googleapis.com/css?family=Annie+Use+Your+Telescope');
        font-family: 'Annie Use Your Telescope', cursive;

      `}</style>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/BulletinBoard' component={BulletinBoard} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
