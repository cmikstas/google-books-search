import React from "react";
import "./style.css";

const BookSearch = (props) => 
{
    return (
        <div className="form-control border-dark">    
            <label className="survey-info" for="bookSearch">Book Search</label>
            <input type="text" className="form-control mt-2" id="bookQuery"
                placeholder="Enter Search Term"></input>
            <button type="submit" className="btn btn-dark mt-2" id="bookSearch">Search</button>
        </div>
    );
}

export default BookSearch;