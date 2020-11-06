import Header from "./components/header";
import Home from "./components/home";
import Products from "./components/products";
import Company from "./components/company";
import NoMatch from "./components/noMatch";
import AddBook from "./components/addBook";
import FindBook from "./components/findBook";
import { Switch, Route } from "react-router-dom";

function App({ bookFacade }) {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Products bookFacade={bookFacade} />
        </Route>
        <Route path="/add-book">
          <AddBook bookFacade={bookFacade} />
        </Route>
        <Route path="/find-book">
          <FindBook bookFacade={bookFacade} />
        </Route>
        <Route path="/company">
          <Company />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
