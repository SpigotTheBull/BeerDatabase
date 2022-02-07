import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddBeveragePage from './pages/beverages/AddBeveragePage';
import EditBeveragePage from './pages/beverages/EditBeveragePage';
import Brewery from './pages/BreweryPage';
import Category from './pages/CategoryPage';
import Reviews from './pages/ReviewPage';
import { useState } from 'react';
import Navigation from './components/Navigation';

//Main entry point for the app

function App() {

  return (
    <div className="App">
      <Router>

        <div className="App-header">
        <Navigation />
          <Routes>
            {/*Beverage*/}
            <Route path="/" exact element={<HomePage/>}>
            </Route>
            <Route path="/add-beverage" exact element={<AddBeveragePage/>}>
            </Route>
            <Route path="/edit-beverage" exact element={<EditBeveragePage/>}>
            </Route>
            {/*Brewery*/}
            <Route path="/brewery" exact element={<Brewery/>}>
            </Route>
            {/*Category*/}
            <Route path="/category" exact element={<Category/>}>
            </Route>
            {/*Reviews*/}
            <Route path="/reviews" exact element={<Reviews/>}>
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
