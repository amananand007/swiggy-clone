// Composing Components
import Title from "./Title";
import { useState } from "react";
import { Link } from "react-router-dom";

const loggedInUser = () => {
  // API call to check authentication
  return false;
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="flex justify-between bg-pink-50">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10 px-2">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link className="px-2" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="px-2" to="/contact">
              Contact
            </Link>
          </li>

          <li>Cart</li>
          <li>
            <Link className="px-2" to="/instamart">
              Instamart
            </Link>
          </li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
