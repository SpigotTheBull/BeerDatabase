import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function EditReview() {
    const history = useNavigate();

    return (
        <>
            <section class="py-4 my-5">
                <div class="container ">
                    <div class="col-md col-8">
                        <form>
                            <h1>Edit a Review</h1>
                            <h2>Beverage Name</h2>

                            <div class="mb-3">
                                <div>
                                <input class="form-check-input" type="radio" id="like" name="like-dislike" value="like" /> 
                                <label for="like" class="form-label">
                                    Like
                                </label>
                                </div>
                                <div>
                                <input class="form-check-input" type="radio" id="dislike" name="like-dislike" value="like" /> 
                                <label for="dislike" class="form-label">
                                    Dislike
                                </label>
                                </div>                              
                            </div>
                            <div class="mb-3">
                                <textarea class="form-control" name="textReview" rows="5" cols="60">
                                    
                                </textarea> 
                            </div>

                            
                            <button class="btn btn-success">
                                Edit Beverage
                            </button>

                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default EditReview;