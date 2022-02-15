import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import ReviewForm from '../../components/Review/ReviewForm';

function AddReview() {
    const history = useNavigate();

    return (
        <>
            <section class="py-4 my-5">
                <div class="container ">
                    <div class="col-md col-8">
                    <h1>Create new Review</h1>
                    <h2>Beverage Name</h2>
                        <ReviewForm />
                        
                    </div>
                </div>
            </section>
        </>
    );
}

export default AddReview;