import { useRouteMatch } from "react-router-dom";
import Details from "./details";
import { Link } from "react-router-dom";

export default function Products({ bookFacade }) {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <ul>
        {bookFacade.getBooks().map((book) => (
          <li key={book.id}>
            {book.title}
            <Link to={`${url}/${book.id}`}>details</Link>
          </li>
        ))}
      </ul>
      <Details bookFacade={bookFacade} />
    </div>
  );
}
