import React, { useState } from "react";
import ProductList from "../components/ProductList";

function Home() {
  const [search, setSearch] = useState("");

  return (
    <div style={{ padding: "2rem" }}> 
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <ProductList search={search} />
    </div>
  );
}

export default Home;