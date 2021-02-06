import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './app/Home/Home';
import Explore from './app/Explore/Explore';
import Notifications from './app/Notifications/Notifications';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/explore">
            <Explore />
          </Route>
          <Route path="/notifications">
            <Notifications />
          </Route>
          <Route path="/messages">
            <Notifications />
          </Route>
          <Route path="/profile">
            <Notifications />
          </Route>
          <Route path="/more">
            <Notifications />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
