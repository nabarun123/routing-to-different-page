import React from "react";
import Navbar from "../component/Navbar";

function About() {
  return (
    <div>
      <div className="container bg-danger" style={{ height: "52vh" }}>
        <h1 className="text-light text-center pt-5 m-2">
          Welcome to About Page
        </h1>
      </div>
      <br />
      <hr />
      <Navbar />
    </div>
  );
}

export default About;
