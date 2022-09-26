import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
function App() {
  const getProducts = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(getProducts);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    };
    loadData();
  }, []);

  const handleAddToCart = (id) => {
    const findProduct = products.find((pd) => pd.id === id);
    if (findProduct) {
      setCart([...cart, findProduct]);
    }
  };

  localStorage.setItem("cart", JSON.stringify(cart));
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              loading={loading}
              products={products}
              handleAddToCart={handleAddToCart}
            />
          }
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
