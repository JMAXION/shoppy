import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Header({ cartCount }) {
  return (
    <div className="header-outer">
      <div className="header">
        <Link to="/" className="header-left">
          <FiShoppingBag />
          <span>HOPENEARUS</span>
        </Link>
        <nav className="header-right">
          <Link to="/products">Products</Link>
          <Link to="/carts">My Cart({cartCount})</Link>
          <Link to="/login">
            <button type="button">Login</button>
          </Link>
          <Link to="/signup">
            <button type="button">Signup</button>
          </Link>
          <Link to="/board">
            <button type="button">Board</button>
          </Link>
          <Link to="/notice">
            <button type="button">Notice</button>
          </Link>
          <Link to="/products/new">
            <BsFillPencilFill className="haeder-right-icon" />
          </Link>
        </nav>
      </div>
    </div>
  );
}
