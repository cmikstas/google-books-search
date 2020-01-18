import React from "react";
import Navbar from "./components/Navbar";
import Search from "./pages/Search";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

function App()
{
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Search} />

        </Switch>
      </div>  
    </Router>
  );
}


export default App;
