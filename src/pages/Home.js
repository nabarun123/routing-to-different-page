import React from "react";
import Navbar from "../component/Navbar.js";

function Home() {
  return (
    <div>
      <div className="container bg-primary" style={{ height: "52vh" }}>
        <h1 className="text-light text-center pt-5 m-2">
          Welcome to Home Page
        </h1>
      </div>
      <br />
      <hr />
      <Navbar />
    </div>
  );
}

export default Home;
