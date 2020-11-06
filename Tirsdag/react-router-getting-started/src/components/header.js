import Home from "./home";
import Exercise1 from "./exercise1";
import Exercise2 from "./exercise2";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

export default function Headers() {
  return (
    <Router>
      <div>
        <ul className="header">
          <li>
            <NavLink exact activeClassName="selected" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/exercise1">
              Exercise1
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/exercise2">
              Exercise2
            </NavLink>
          </li>
        </ul>

        <hr />

        {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/exercise1">
              <Exercise1 />
            </Route>
            <Route path="/exercise2">
              <Exercise2 />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
