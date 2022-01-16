import './App.css';
import ProblemBank from './Routes/ProblemBank';
import Post from './Routes/Post';
import React from 'react';
import BrowserRouter as Router from "react-router-dom";
import Routes from "react-router-dom";
import Route from "react-router-dom";
import Link from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path= "/" element = {<ProblemBank />} />
        <Route exact path= "/Post" element = {<Post />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
