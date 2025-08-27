import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const cartCount = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <header>
      <Link to="/" className="logo">E-Shop</Link>
      <nav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/cart" className="nav-link">Cart 🛒 ({cartCount})</Link>
        <Link to="/checkout" className="nav-link">Checkout</Link>
      </nav>
    </header>
  );
}

export default Header;
