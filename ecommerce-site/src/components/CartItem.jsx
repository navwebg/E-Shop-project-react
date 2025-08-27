import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={item.thumbnail} alt={item.title} />
        <div>
          <h3>{item.title}</h3>
          <p>${item.price}</p>
        </div>
      </div>
      <div className="cart-actions">
        <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: Math.max(1, item.quantity - 1) }))}>-</button>
        <input type="text" readOnly value={item.quantity} />
        <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button>
        <button onClick={() => dispatch(removeFromCart(item.id))} className="remove-btn">🗑</button>
      </div>
    </div>
  );
}

export default CartItem;
