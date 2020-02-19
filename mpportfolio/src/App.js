import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav> 
      <Router>
        <Route exact path="./Gallery">Gallery</Route>
        <Route exact path="./About">About</Route>
        <Route exact path="./Contact">Contact</Route>
      </Router>
      </Nav>
    </div>
  );
}

export default App;
