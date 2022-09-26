import React from "react";
import Loader from "../components/Loader";
import Product from "../components/Product";

const Home = ({ loading, products, handleAddToCart }) => {
  if (loading) {
    return (
      <section className="py-5">
        <div className="container">
          <div class="row row-cols-2 row-cols-md-4 g-3">
            <Loader />
            <Loader />
            <Loader />
            <Loader />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-5">
      <div className="container">
        <div class="row row-cols-2 row-cols-md-4 g-3">
          {products.map((product) => (
            <Product
              key={product.id}
              {...product}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
