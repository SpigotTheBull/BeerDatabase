import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import { useNavigate } from "react-router";

//Auto complete stuff
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
//This componet is used on the /add-parent-category page for making parent categories


function TagAdd() {
    let navigate = useNavigate();


    const [nameInput, setNameInput] = React.useState();


    //Submit data to backend
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { nameInput }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        }

        const response = await fetch('https://brew-review-backend.herokuapp.com/tag/', requestOptions);
        if (response.status === 200) {
            alert("Successfully added the Tag: " + data.nameInput);
        }
        else {
            alert(`Failed to add Parent Category, status code = ${response.status}`);
        }
        console.log(response)
        navigate("/tag-list")
    };

    return (
        <>
            <form>
                <div class="mb-3">
                    <label for="nameInput" class="form-label">
                        Tag Name
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Tag"
                        name="nameInput"
                        value={nameInput || ""}
                        onChange={(e) => setNameInput(e.target.value)}
                        required
                    />
                </div>                
                <button
                    class="btn btn-success"
                    onClick={handleSubmit}
                >
                    Submit Tag
                </button>

            </form>
        </>
    )
};
export default TagAdd;