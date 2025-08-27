import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductItem({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="product-info">
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <div className="product-buttons">
          <Link to={`/product/${product.id}`} className="btn btn-secondary">
            Details
          </Link>
          <button
            className="btn btn-primary"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;

