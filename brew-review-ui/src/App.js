import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
/** Beverages */
import HomePage from './pages/HomePage';
import AddBeveragePage from './pages/beverages/AddBeveragePage';
import EditBeveragePage from './pages/beverages/EditBeveragePage';
/** Brewery*/
import Breweries from './pages/breweries/BreweryPage';
import BreweryDetail from './pages/breweries/BreweryDetailPage';
import AddBrewery from './pages/breweries/AddBreweryPage'
import EditBrewery from './pages/breweries/EditBreweryPage';
/** Category */
import Category from './pages/categories/CategoryPage';
import AddCategory from './pages/categories/AddCategoryPage';
import EditCategory from './pages/categories/EditCategoryPage';
import CategoryDetail from './pages/categories/CategoryDetailPage';
/** Parent Category */
import AddParentCategory from './pages/parent-category/AddParentCategoryPage';
import EditParentCategory from './pages/parent-category/EditParentCategoryPage';
import ParentCategory from './pages/parent-category/ParentCategoryPage';
import ParentCategoryDetail from './pages/parent-category/ParentCategoryDetailPage';
/** Reviews */
import Review from './pages/reviews/ReviewPage';
import AddReview from './pages/reviews/AddReviewPage';
import EditReview from './pages/reviews/EditReviewPage'
/** Tags */
import TagDetail from './pages/tags/TagDetailPage';
import Tag from './pages/tags/TagPage';
import AddTag from './pages/tags/AddTagPage';
import EditTag from './pages/tags/EditTagPage';
import { useState } from 'react';
import Navigation from './components/Navigation';


//Main entry point for the app

function App() {
  const[beverageToEdit, setBeverageToEdit] = useState();
  const[breweryToEdit, setBreweryToEdit] = useState();
  const[categoryToEdit, setCategoryToEdit] = useState();
  const[parentCategoryToEdit, setParentCategoryToEdit] = useState();
  const[reviewsToEdit, setReviewsToEdit] = useState();
  const[tagToEdit, setTagToEdit] = useState();
 

  return (
    <div className="App">
      <Router>

        <div className="App-header">
        <Navigation />
          <Routes>
            {/*Beverage*/}
            <Route path="/" exact element={<HomePage setBeverageToEdit={setBeverageToEdit}/>}>
            </Route>
            <Route path="/add-beverage" exact element={<AddBeveragePage/>}>
            </Route>
            <Route path="/edit-beverage" exact element={<EditBeveragePage beverageToEdit={beverageToEdit}/>}>
            </Route>
            
            {/*Brewery*/}
            <Route path="/brewery" exact element={<Breweries setBreweryToEdit={setBreweryToEdit}/>}>
            </Route>
            <Route path="/brewery-detail/:slug" exact element={<BreweryDetail setBeverageToEdit={setBeverageToEdit} setBreweryToEdit={setBreweryToEdit}/>}>
            </Route>
            <Route path="/add-brewery" exact element={<AddBrewery/>}>
            </Route>
            <Route path="/edit-brewery" exact element={<EditBrewery breweryToEdit={breweryToEdit}/>}>
            </Route>
            
            {/*Category*/}
            <Route path="/category" exact element={<Category setCategoryToEdit={setCategoryToEdit}/>}>
            </Route>
            <Route path="/category-detail/:slug" exact element={<CategoryDetail />}>
            </Route>
            <Route path="/add-category" exact element={<AddCategory/>}>
            </Route>
            <Route path="/edit-category" exact element={<EditCategory categoryToEdit={categoryToEdit}/>}>
            </Route>

            {/*Parent Category*/}
            <Route path="/parent-category" exact element={<ParentCategory setParentCategoryToEdit={setParentCategoryToEdit} />}>
            </Route>
            <Route path="/parent-category-detail" exact element={<ParentCategoryDetail/>}>
            </Route>
            <Route path="/add-parent-category" exact element={<AddParentCategory/>}>
            </Route>
            <Route path="/edit-parent-category" exact element={<EditParentCategory parentCategoryToEdit={parentCategoryToEdit}/>}>
            </Route>

            {/*Reviews*/}
            <Route path="/review/:slug" exact element={<Review setReviewsToEdit={setReviewsToEdit}/>}>
            </Route>
            <Route path="/add-review/:slug" exact element={<AddReview/>}>
            </Route>
            <Route path="/edit-review" exact element={<EditReview reviewsToEdit={reviewsToEdit}/>}>
            </Route>
            
            {/*Tag*/}
            <Route path="/tag-list" exact element={<Tag setTagToEdit={setTagToEdit}/>}>
            </Route>
            <Route path="/tag-detail/:slug" exact element={<TagDetail/>}>
            </Route>
            <Route path="/add-tag" exact element={<AddTag/>}>
            </Route>
            <Route path="/edit-tag/" exact element={<EditTag tagToEdit={tagToEdit}/>}>
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
