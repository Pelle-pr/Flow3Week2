import { NavLink } from "react-router-dom";
import "../index.css";
export default function Header() {
  return (
    <ul className="header">
      <li>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/jokes">
          Jokes
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/scrape">
          Scrape
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/login">
          Login
        </NavLink>
      </li>
    </ul>
  );
}
