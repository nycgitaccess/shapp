import './App.css';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';

import NavBar from './components/menu/NavBar';
import * as routes from './constants/routes';


class App extends Component {
  render() {
    return (
      <Router>
         <NavBar />
          <div>
            <Route exact path={routes.TRAININGS} component={Trainigns} /> 
            <Route exact path={routes.ORGANISATIONS} component={Organisations} />
            <Route exact path={routes.MEMBERS} component={Members} /> 
            <Route exact path={routes.MANAGE} component={Manage} />
          </div>          
          
      </Router>
    );
  }
}

export default App;