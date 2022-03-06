import { useState, useEffect } from 'react';

import {  useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import ReviewAdd from '../../components/Review/ReviewAdd';
import BeverageList from '../../components/Beverage/BeverageList';
function AddReview() {

    const slug = useParams();
    
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

    return (
        <>
            <section class="py-4 my-5">
                <div class="container ">
                    <div class="col-md col-9">
                    <h1>Create new review for</h1>
                    <BeverageList beverage={beverage}></BeverageList>
                    <ReviewAdd beverage={beverage}></ReviewAdd>
          
                        
                    </div>
                </div>
            </section>
        </>
    );
}

export default AddReview;