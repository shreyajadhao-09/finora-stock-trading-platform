import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5 mb-4">404 Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>

        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "black",
            width: "150px",
            marginLeft: "470px",
            backgroundColor: "#387ED1",
          }}
          className="p-3 mt-4 mb-5 btn btn-primary "
        >
          Goto Home
        </Link>
        <p className="mb-5"></p>
      </div>
    </div>
  );
}

export default NotFound;
