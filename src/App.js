import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Logbook from './components/logbook/Logbook';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={ Logbook } />
            <Route path='/login' component={ Login } />
            <Route path='/register' component={ Register } />
            {/* <Route path='/flight/:id' component={ Logbook } /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
