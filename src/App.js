import React from 'react';
import './App.scss';
import Header from './Components/Header';
import Poster from './Components/Poster';
import Eventi from './page/eventi';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './page/home';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/eventi" element={<Eventi />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
