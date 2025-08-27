import React, { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
const ProductDetail = lazy(() => import("./components/ProductDetail"));
const Cart = lazy(() => import("./components/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const NotFound = lazy(() => import("./components/NotFound"));

function App() {
  const location = useLocation();
  const noFooterPaths = ["/cart", "/checkout"]; 

  return (
    <>
      <Header />
      <main style={{ flex: 1 }}>
        <Suspense fallback={<p style={{ textAlign: "center", marginTop: "2rem" }}>Loading...</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      {!noFooterPaths.includes(location.pathname) && <Footer />}
    </>
  );
}

export default App;
