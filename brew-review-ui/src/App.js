import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
/** Beverages */
import HomePage from './pages/HomePage';
import AddBeveragePage from './pages/beverages/AddBeveragePage';
import EditBeveragePage from './pages/beverages/EditBeveragePage';
import Brewery from './pages/BreweryPage';
/** Brewery*/
import Breweries from './pages/breweries/BreweryPage';
import BreweryDetail from './pages/breweries/BreweryDetailPage';
import AddBrewery from './pages/breweries/AddBreweryPage'
import EditBrewery from './pages/breweries/EditBreweryPage';
/** Category */
import Category from './pages/categories/CategoryPage';
/** Reviews */
import Review from './pages/reviews/ReviewPage';
import AddReview from './pages/reviews/AddReviewPage';
import EditReview from './pages/reviews/EditReviewPage'
import { useState } from 'react';
import Navigation from './components/Navigation';
import AddCategory from './pages/categories/AddCategoryPage';
import EditCategory from './pages/categories/EditCategoryPage';

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
            <Route path="/brewery" exact element={<Breweries/>}>
            </Route>
            <Route path="/brewery-detail" exact element={<BreweryDetail/>}>
            </Route>
            <Route path="/add-brewery" exact element={<AddBrewery/>}>
            </Route>
            <Route path="/edit-brewery" exact element={<EditBrewery/>}>
            </Route>
            
            {/*Category*/}
            <Route path="/category" exact element={<Category/>}>
            </Route>
            {/*Reviews*/}
            <Route path="/review" exact element={<Review/>}>
            </Route>
            <Route path="/add-review" exact element={<AddReview/>}>
            </Route>
            <Route path="/edit-review" exact element={<EditReview/>}>
            </Route>
            <Route path="/add-category" exact element={<AddCategory/>}>
            </Route>
            <Route path="/edit-category" exact element={<EditCategory/>}>
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
