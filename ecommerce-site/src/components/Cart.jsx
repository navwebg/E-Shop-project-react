import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

function Cart() {
  const items = useSelector((state) => state.cart.items);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="cart-container">
        <h2>Your Cart is Empty</h2>
        <Link to="/" className="btn btn-primary">Go Shopping</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      {items.map(item => <CartItem key={item.id} item={item} />)}
      <div className="cart-total">
        <p>Total: ${total.toFixed(2)}</p>
        <Link to="/checkout">Checkout</Link>
      </div>
    </div>
  );
}

export default Cart;
