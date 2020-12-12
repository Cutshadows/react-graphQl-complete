import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import MessageList from './components/MessageList';
import MessageForm from './components/MessageForm';

import "bootswatch/dist/lux/bootstrap.min.css"
import Navigation from './components/Layout/NavBar';

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container p-4">
        <Switch>
              <Route exact path="/" component={MessageList}/>
              <Route exact path="/new-message" component={MessageForm}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
