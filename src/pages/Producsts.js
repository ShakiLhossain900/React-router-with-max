import React from "react";
import { Link } from "react-router-dom";

const Producsts = () => {
  return (
    <div>
      <h1>The Producsts Page</h1>
      <ul>
        <li>
          <Link to="/producsts/p1">A Books</Link>
        </li>
        <li>
          <Link to="/producsts/p2">A Carpet</Link>
        </li>
        <li>
          <Link to="/producsts/p3">An Online Course</Link>
        </li>
      </ul>
    </div>
  );
};

export default Producsts;
