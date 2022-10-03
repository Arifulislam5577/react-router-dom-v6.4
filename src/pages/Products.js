import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../components/Product";
const Products = () => {
  const products = useLoaderData();

  return (
    <section className="product py-5">
      <div className="container">
        <div className="row row-cols-2 row-cols-md-4 g-3">
          {products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
