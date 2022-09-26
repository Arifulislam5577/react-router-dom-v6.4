import React from "react";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 sticky-top">
      <div className="container d-flex align-items-center justify-content=between">
        <Link
          className="navbar-brand text-warning text-uppercase fw-bold"
          to="/"
        >
          ema-john
        </Link>

        <Link to="/cart" className="nav-link  d-flex">
          <span>
            <BsCart4 color="white" />
          </span>
          <span
            className="bg-warning d-block d-flex align-items-center justify-content-center rounded-circle text-dark"
            style={{ height: "20px", width: "20px", fontSize: "12px" }}
          >
            12
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
