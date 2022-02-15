import React from "react";
import { Link } from "react-router-dom";
//This componet is used on the home page for the beverage cards

function ReviewForm() {
    return (
        <div>
            <form>
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
                    <br />
                    <small>Tenative logic is to have the backend create tags during the M:M linking if they don't exist</small>
                    <input class="form-control" name="tags" placeholder="Seperate tags with a comma">
                    </input>
                </div>
                <div class="mb-3">
                    <textarea class="form-control" name="textReview" rows="5" cols="60">

                    </textarea>
                </div>
                <button class="btn btn-success">
                    Add Review
                </button>

            </form>
        </div>
    )
}

export default ReviewForm;