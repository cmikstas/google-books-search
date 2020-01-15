import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron"
import BookSearch from "../components/BookSearch"
import ResultsDiv from "../components/ResultsDiv"
import API from "../utils/API";

class Search extends Component
{
  state =
  {
    books: [],
    bookName: "",
  };

  searchBooks = () =>
  {
    API.searchBooks(this.state.bookName)
    .then(res =>
      {
        //console.log(res.data)
        this.setState({ books: res.data });
        console.log(this.state.books);
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event =>
  {
    console.log(event);
    const bookName = event.target.value;
    this.setState({ bookName: bookName });
    
  };

  render()
  {
    return (
      <div className="htmlBody">
        <div className="jumbotron jumbo text-center">
          <Jumbotron />
        </div>
        <div className="container-fluid containerDiv">
          <BookSearch
            searchBooks = {this.searchBooks}
            handleInputChange = {this.handleInputChange}
          />
          <ResultsDiv />
        </div>
      </div>
    )
  }
}

export default Search;