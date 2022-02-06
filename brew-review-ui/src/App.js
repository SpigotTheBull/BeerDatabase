import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddBeveragePage from './pages/AddBeveragePage';
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <Router>

        <div className="App-header">
          <Routes>
            <Route path="/" exact element={<HomePage/>}>
            </Route>
            <Route path="/add-beverage" exact element={<AddBeveragePage/>}>
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
