import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron"
import BookSearch from "./components/BookSearch"
import ResultsDiv from "./components/ResultsDiv"
import './App.css';

class App extends Component
{
  render()
  {
    return (
      <div className="htmlBody">
        <Navbar></Navbar>
        <div className="jumbotron jumbo text-center">
          <Jumbotron></Jumbotron>
        </div>
        <div className="container-fluid containerDiv">
          <BookSearch></BookSearch>
          <ResultsDiv></ResultsDiv>
        </div>
      </div>
    )
  }
}


export default App;
