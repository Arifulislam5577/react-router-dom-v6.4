import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { image, title, price, id, handleAddToCart } = props;
  return (
    <div className="col">
      <div className="card overflow-hidden shadow-sm " aria-hidden="true">
        <Link to={`/product/${id}`}>
          <img
            src={image}
            className="card-img-top my-3"
            alt={title}
            style={{ height: "8rem", objectFit: "contain" }}
          />
        </Link>
        <div className="card-body p-4">
          <h5
            className="card-title  text-dark text-left"
            style={{ height: "3rem", fontSize: "14px" }}
          >
            <Link
              to={`/product/${id}`}
              className="text-dark text-decoration-none"
            >
              {title.split(" ").slice(0, 5).join(" ")}
            </Link>
          </h5>

          <div className="d-flex flex-column flex-md-row align-items-center justify-content-between">
            <h6 className="fw-bold text-secondary">${price}</h6>
            <button
              className="btn btn-dark btn-sm  text-capitalize fs-6"
              onClick={() => handleAddToCart(id)}
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
