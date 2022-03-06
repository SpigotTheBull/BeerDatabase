import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import { useNavigate } from "react-router";

//Auto complete stuff
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
// This componet is used for adding reivews

function ReviewAdd() {
    let navigate = useNavigate();
    const slug = useParams();

    const [textReviewInput, setTextReviewInput] = React.useState();
    const [ratingInput, setRatingInput] = React.useState();
    const beverageID_FK = slug.slug
    const [tags, setTags] = React.useState();

    //Submit data to backend
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { textReviewInput, ratingInput, beverageID_FK, tags }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        }
        console.log("Request options are: ")
        console.log(requestOptions)
        console.log(data)
        
        const response = await fetch('https://brew-review-backend.herokuapp.com/review', requestOptions);
        if (response.status === 200) {
            alert("Successfully added review");
        }
        else {
            alert(`Failed to add Beverage, status code = ${response.status}`);
            
        }
        console.log(response)
        navigate("/")
    };

    // Get tags pool
    const [tag, setTag] = useState([]);
    //useEffect calls loadBeverage() to get the Beverage data asyncronously.
    useEffect(() => {
        loadTag();
    }, []);

    const loadTag = async () => {
        await fetch('https://brew-review-backend.herokuapp.com/tag/')
            .then(responce => responce.json())
            .then(receivedData => setTag(receivedData));
    }
    console.log("Tags:")
    console.log(tags)
    return (
        <div>
            <form>
                <div class="mb-3">
                    <div>
                        <input
                            class="form-check-input"
                            type="radio"
                            id="like"
                            name="ratingInput"
                            value="1" 
                            onChange={(e) => setRatingInput(e.target.value)}
                            />
                        <label
                            for="like"
                            class="form-label">
                            Like
                        </label>
                    </div>
                    <div>
                        <input
                            class="form-check-input"
                            type="radio"
                            id="dislike"
                            name="ratingInput"
                            value="-1"                         
                            onChange={(e) => setRatingInput(e.target.value)}
                            />
                        <label
                            for="dislike"
                            class="form-label">
                            Dislike
                        </label>
                    </div>
                </div>
                <div class="mb-3">
                    <label
                        for="tags"
                        class="form-label">
                        Tags
                    </label>
                    <br />
                    {/*}
                    <small>Tenative logic is to have the backend create tags during the M:M linking if they don't exist</small>
                    <input class="form-control" name="tags" placeholder="Seperate tags with a comma">
                    </input>{*/}
                    <Autocomplete
                        multiple
                        id="tags"
                        options={tag.map((option) => option.Name)}
                        defaultValue={[]}
                        value={tags}
                        onChange={(event, newValue) => {
                            console.log("newValue is")
                            console.log(newValue)
                            setTags(newValue);
                        }}
                        freeSolo
                        renderTags={(value, getTagProps) =>
                            value.map((option, index) => (
                                <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                            ))
                        }
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="filled"
                                label="Tags"
                                placeholder="Tags"
                            />
                        )}
                    />
                </div>
                <div class="mb-3">
                    <textarea
                        class="form-control"
                        name="textReview"
                        placeholder="Type your review here"
                        rows="5"
                        cols="60"
                        value={textReviewInput || ""}
                        onChange={(e) => setTextReviewInput(e.target.value)}
                        required
                    />

                </div>
                <button
                    class="btn btn-success"
                    onClick={handleSubmit}
                >
                    Submit Review
                </button>

            </form>
        </div>
    )
}

export default ReviewAdd;