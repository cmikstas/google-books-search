import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron"
import BookSearch from "../components/BookSearch"
import ResultsDiv from "../components/ResultsDiv"
import TarjetaDeLibro from "../components/TarjetaDeLibro"
import "./search.css";
import API from "../utils/API";

class Search extends Component {
  state =
    {
      books: [],
      bookName: "",
      title: "",
      authors: "",
      description: "",
      image: "",
      link: ""
    };

  searchBooks = (event) => 
  {
    event.preventDefault();
    API.searchBooks(this.state.bookName)
      .then(res => 
      {
        //console.log(res.data)
        this.setState({ books: res.data.items });
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
            searchBooks={this.searchBooks}
            handleInputChange={this.handleInputChange}
          />
          {this.state.books.length ? (
            <ResultsDiv>
              {this.state.books.map(books => (
                <TarjetaDeLibro
                  image={books.volumeInfo.imageLinks.smallThumbnail}
                  name={books.volumeInfo.title}
                  authors={books.volumeInfo.authors}
                  description={books.volumeInfo.description}
                  infoLink={books.volumeInfo.infoLink}
                  id={books.id}
                  key={books.id}
                />
              ))}
            </ResultsDiv>
          ) : (
              <h3>No Results to Display</h3>
            )}
          <br />
        </div>
      </div>
    )
  }
}

export default Search;