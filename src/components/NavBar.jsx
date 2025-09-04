import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#f4f4f4" }}>
      <Link to="/" style={{ margin: "0 10px" }}>
        Home
      </Link>
      <Link to="/login" style={{ margin: "0 10px" }}>
        Login
      </Link>
      <Link to="/bitcoin-rates" style={{ margin: "0 10px" }}>
        Bitcoin Rates
      </Link>
    </nav>
  );
}

export default NavBar;
