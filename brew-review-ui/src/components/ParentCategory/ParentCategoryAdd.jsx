import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import { useNavigate } from "react-router";

//Auto complete stuff
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
//This componet is used on the /add-parent-category page for making parent categories


function ParentCategoryAdd() {
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

        const response = await fetch('https://brew-review-backend.herokuapp.com/parent-category/', requestOptions);
        if (response.status === 200) {
            alert("Successfully added the Parent Category: " + data.nameInput);
        }
        else {
            alert(`Failed to add Parent Category, status code = ${response.status}`);
        }
        console.log(response)
        navigate("/parent-category")
    };

    return (
        <>
            <form>
                <div class="mb-3">
                    <label for="nameInput" class="form-label">
                        Parent Category Name
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Parent Category"
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
                    Submit Type
                </button>

            </form>
        </>
    )
};
export default ParentCategoryAdd;