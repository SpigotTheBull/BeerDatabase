import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function AddReview() {
    const history = useNavigate();

    return (
        <>
            <section class="py-4 my-5">
                <div class="container ">
                    <div class="col-md col-8">
                        <form>
                            <h1>Create new Review</h1>
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
                                <label for="tags" class="form-label">
                                    Tags
                                </label>
                                <br/>
                                <small>Tenative logic is to have the backend create tags during the M:M linking if they don't exist</small>
                                <input class="form-control" name="tags" placeholder="Seperate tags with a comma">
                                    
                                </input> 

                            </div>
                            <div class="mb-3">
                                <textarea class="form-control" name="textReview" rows="5" cols="60">
                                    
                                </textarea> 
                            </div>

                            
                            <button class="btn btn-success">
                                Add Beverage
                            </button>

                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AddReview;