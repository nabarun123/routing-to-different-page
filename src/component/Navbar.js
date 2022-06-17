import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function Navbar() {
  return (
    <div className="container text-center" style={{ height: 5 + "rem" }}>
      <div className="row">
        <div className="col">
          <Link to="/" style={{ "text-decoration": "none" }}>
            <button className="btn btn-primary p-2">
              <h5 className="col">Home</h5>
            </button>
          </Link>
        </div>

        <div className="col">
          <Link to="/about" style={{ "text-decoration": "none" }}>
            <button className="btn btn-danger p-2">
              <h5 className="col">About</h5>
            </button>
          </Link>
        </div>

        <div className="col">
          <Link to="/skills" style={{ "text-decoration": "none" }}>
            <button className="btn btn-warning p-2">
              <h5 className="col">Skills</h5>
            </button>
          </Link>
        </div>

        <div className="col">
          <Link to="/projects" style={{ "text-decoration": "none" }}>
            <button className="btn btn-info p-2">
              <h5 className="col">Projects</h5>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
