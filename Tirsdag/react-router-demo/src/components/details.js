import { useRouteMatch, Switch, Route, useParams } from "react-router-dom";
export default function Details({ bookFacade }) {
  let { path } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <h3>Book details for selected book will go here.</h3>
        </Route>
        <Route path={`${path}/:bookId`}>
          <Info bookFacade={bookFacade} />
        </Route>
      </Switch>
    </div>
  );
}

function Info({ bookFacade }) {
  let { bookId } = useParams();
  let book = bookFacade.findBook(bookId);

  return (
    <div>
      <h2>{book.title}</h2>
      <h3>{book.info}</h3>
    </div>
  );
}
