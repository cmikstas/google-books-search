import React from "react";
import "./style.css";

const Jumbotron = (props) => 
{
    return (
      <div>
        <h1>(React) Google Books Search</h1>
        <br></br>
        <h2>Search For and Save Books of Interest</h2>
        <br></br>
        <button type="button" class="btn btn-dark">Saved Articles</button>
      </div>
    );
}

export default Jumbotron;