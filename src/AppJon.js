import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';

import * as routes from './constants/routes';

import NavBar from './components/menu/NavBar';
import Trainigns from './components/pages/placeholders/Trainings';
import Organisations from './components/pages/placeholders/Organisations';
import Members from './components/pages/placeholders/Members';
import Manage from './components/pages/placeholders/Manage';

import Trainings from './components/pages/placeholders/Trainings';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="AppContent">
          <div className="menu">
            <NavBar />
            <Trainings />
            <Organisations />
            <Members />
            <Manage />
              
            </div>
            <div className="contnetFetch">
              <Route exact path={routes.TRAININGS} component={Trainigns} /> 
                <Route exact path={routes.ORGANISATIONS} component={Organisations} />
                <Route exact path={routes.MEMBERS} component={Members} /> 
                <Route exact path={routes.MANAGE} component={Manage} />
            </div>         
        </div>
      </Router>
    );
  }
}
// function Hello(){
//   return(
//   <div>
//            <Trainings />
//             <Organisations />
//             <Members />
//              <Manage />
// </div>
//   )
//}
export default App;