import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './Home';
import Datepicker from './Datepicker';
import Tickets from './Tickets';
import './App.css';

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/datepicker">
            <main className="App">
              <Datepicker />
            </main>
          </Route>
          <Route path="/tickets">
            <Tickets />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}
