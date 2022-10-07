import React from "react";
import { Link } from "react-router-dom";

const Producsts = () => {
  return (
    <div>
      <h1>The Producsts Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">A Books</Link>
        </li>
        <li>
          <Link to="/products/p2">A Carpet</Link>
        </li>
        <li>
          <Link to="/products/p3">An Online Course</Link>
        </li>
      </ul>
    </div>
  );
};

export default Producsts;
