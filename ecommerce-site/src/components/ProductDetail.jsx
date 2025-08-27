import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) throw new Error("Failed to fetch product");
        const json = await res.json();
        setProduct(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  if (loading) return <p style={{textAlign:'center'}}>Loading product...</p>;
  if (error) return <p style={{color:'red', textAlign:'center'}}>{error}</p>;
  if (!product) return <p style={{textAlign:'center'}}>No product found.</p>;

  return (
    <div className="product-detail">
      <img src={product.thumbnail} alt={product.title} />
      <div>
        <h2>{product.title}</h2>
        <p className="price">${product.price}</p>
        <p>{product.description}</p>
        <button onClick={() => dispatch(addToCart(product))}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
