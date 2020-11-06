import { Switch, Route } from "react-router-dom";
import Jokes from "./components/jokes";
import Home from "./components/home";
import Scrape from "./components/scrape";
import NoMatch from "./components/noMatch";
import Header from "./components/header";
import Login from "./components/login";

function App({ facade }) {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/jokes">
          <Jokes facade={facade} />
        </Route>
        <Route path="/scrape">
          <Scrape />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
