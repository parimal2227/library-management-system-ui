import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    {/*jumbotron is provided by bootstrap*/}
    <h1>Library Administration</h1>
    <p>create, edit, delete and search a book</p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more
    </Link>
  </div>
);

export default HomePage;
