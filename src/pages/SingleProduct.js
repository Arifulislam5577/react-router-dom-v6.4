import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const SingleProduct = () => {
  const { image, title, description, price, rating, category } =
    useLoaderData();

  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 d-flex align-items-center justify-content-center">
            <img src={image} alt={title} className="img-fluid  w-50" />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <span className="text-white rounded px-2 bg-warning">
              {category}
            </span>
            <h3 className="text-dark mb-2">{title}</h3>
            <p className="text-secondary" style={{ fontSize: "14px" }}>
              {description}
            </p>
            <h4>${price}</h4>
            <button className="btn btn-dark text-white text-uppercase">
              add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
