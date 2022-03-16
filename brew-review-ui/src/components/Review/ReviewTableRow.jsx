import React from "react";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import TagGroup from "./TagGroup";
//This componet is used on the home page for the beverage cards

function ReviewTableRow({ reviewID }) {

    //Get Review data
    const [review, setReview] = useState([]);
    //useEffect calls loadBeverage() to get the Beverage data asyncronously.
    useEffect(() => {
        loadReview();
    }, []);
    const loadReview = async () => {
        await fetch(`https://brew-review-backend.herokuapp.com/review/${reviewID.reviewID}`)
            .then(responce => responce.json())
            .then(receivedData => setReview(receivedData));
    }    
    return (
        <UnpackReview review={review}></UnpackReview>
    );
}
export default ReviewTableRow;

function UnpackReview({ review }) {
    // Theres is only one JSON item and we need it unpacked. There has to be a better way to do this.
    return (
        <>
            {review.map((review, i) => <Review review={review}
                key={i} />)}
        </>
    );
}

function Review({ review }) {
        //Get tag data
        const [tags, setTags] = useState([]);

        //useEffect calls loadBeverage() to get the Beverage data asyncronously.
        useEffect(() => {
            loadTags();
        }, []);
        const loadTags = async () => {
            await fetch(`https://brew-review-backend.herokuapp.com/review/review-tags/${review.reviewID}`)
                .then(responce => responce.json())
                .then(receivedData => setTags(receivedData));
        }
        console.log("Tags:")
        console.log(tags)
    return (
        <tr>
            <td>{review.Rating}</td>
            <td>{review.Review_Text}</td>
            <td>{ <TagGroup tags={tags}></TagGroup>}</td>
            <td>
                <Link to="#">
                    <button type="button" class="btn btn-danger btn-sm m-2">Delete</button>
                </Link>
                <Link to="../edit-review">
                    <button type="button" class="btn btn-warning btn-sm m-2">Edit</button>
                </Link></td>
        </tr>
    )
}