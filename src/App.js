import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Hero from "./pages/Hero";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        { path: "/", element: <Hero /> },
        {
          path: "products",
          element: <Products />,
          loader: async () => fetch("https://fakestoreapi.com/products"),
        },
        { path: "cart", element: <Cart /> },
        {
          path: "product/:id",
          element: <SingleProduct />,
          loader: async ({ params }) =>
            fetch(`https://fakestoreapi.com/products/${params.id}`),
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
