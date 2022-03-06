import { useState, useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ReviewTable from '../../components/Review/ReviewTable';
import BeverageList from '../../components/Beverage/BeverageList'

function Reviews() {
    //The slug is the beverageID
    const slug = useParams();
    const newReviewLink = "../add-review/" + slug.slug;


    // Get list of reviews for this beverage
    const [reviews, setReviews] = useState([]);
    //useEffect calls loadBeverage() to get the Beverage data asyncronously.
    useEffect(() => {
        loadReviews();
    }, []);

    const loadReviews =  async () => {
        await fetch(`https://brew-review-backend.herokuapp.com/review/beverage/${slug.slug}`)
        .then(responce => responce.json())
        .then(receivedData => setReviews(receivedData));
    }

    // Get data for this beverage
    const [beverage, setBeverage] = useState([]);
    //useEffect calls loadBeverage() to get the Beverage data asyncronously.
    useEffect(() => {
        loadBeverage();
    }, []);

    const loadBeverage =  async () => {
        await fetch(`https://brew-review-backend.herokuapp.com/beverage/${slug.slug}`)
        .then(responce => responce.json())
        .then(receivedData => setBeverage(receivedData));
    }
    console.log("The beverage is: ")
    console.log(beverage)
    return (
        <section class="py-4 my-5">
            <div class="container ">
                <div class="row">
                    <div class="col-10">
                        <div className="page-container">
                            <h1 class="h1">Reviews</h1>
                            <BeverageList beverage={beverage}></BeverageList>
                            
                            <Link to={newReviewLink}>
                            <button class="btn btn-success">New Review</button>
                            </Link>
                            <table class="table">
                                <thead>
                                <tr>
                                    <th>Rating</th>
                                    <th>TextReview</th>
                                    <th>Tags</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                <ReviewTable review={reviews}></ReviewTable>
                                </tbody>
                            </table>


                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Reviews;