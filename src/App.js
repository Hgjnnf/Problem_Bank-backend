import './App.css';
import ProblemBank from './Routes/ProblemBank';
import Post from './Routes/Post';
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Routes from "react-router-dom";
import Route from "react-router-dom";
import Link from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path= "/" element = {<ProblemBank />} />
        <Route exact path= "/Post" element = {<Post />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
