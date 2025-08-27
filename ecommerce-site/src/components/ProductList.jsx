import React from "react";
import ProductItem from "./ProductItem";
import useFetchProducts from "../hooks/useFetchProducts";

function ProductList({ search }) {
  const { data: products, loading, error } = useFetchProducts("https://dummyjson.com/products");

  if (loading) return <p className="text-center">Loading products...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {filtered.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
