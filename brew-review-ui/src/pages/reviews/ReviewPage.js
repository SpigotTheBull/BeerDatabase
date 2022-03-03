import { useState, useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ReviewTable from '../../components/Review/ReviewTable';

function Reviews() {
    //The slug is the categoryID
    const slug = useParams();

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
    console.log(reviews)
    return (
        <section class="py-4 my-5">
            <div class="container ">
                <div class="row">
                    <div class="col-10">
                        <div className="page-container">
                            <h1 class="h1">To do: Populate this page with reviews</h1>
                            <h2 class="h2">Beverage name</h2>
                            <ul>
                                <li>ABV value: ##%</li>
                                <li>Category name</li>
                                <li>Brewery Name</li>
                            </ul>
                            <Link to="../add-review">
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