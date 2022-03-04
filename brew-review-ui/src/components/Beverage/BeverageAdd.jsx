import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import ReactDOM from 'react-dom';
import { useNavigate } from "react-router";
//This componet is used on the home page for the beverage cards

function BeverageAdd() {
    let navigate = useNavigate();
    const [inputs, setInputs] = useState({})


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
        console.log(inputs)
      }

    const handleSubmit = async () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(inputs),
        }

        const response = await fetch('https://brew-review-backend.herokuapp.com/beverage', requestOptions);
        if (response.status === 201) {
            alert("Successfully added the Beverage" + inputs.nameInput);
        }
        else {
            alert(`Failed to add exercise, status code = ${response.status}`);
        }
        navigate("/")
    };


    return (
        <div>            
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="nameInput" class="form-label">
                        Beverage Name
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Beverage Name"
                        name="nameInput"
                        value={inputs.nameInput || ""}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div class="mb-3">
                    <label for="abvInput" class="form-label">
                        ABV
                    </label>
                    <input
                        type="number"
                        min="0"
                        max="1"
                        step=".01"
                        class="form-control"
                        placeholder="0.00"
                        name="abvInput"
                        value={inputs.abvInput || ""}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div class="mb-3">
                    <label for="breweryID_FK" class="form-label">
                        Brewery
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Brewery"
                        name="breweryID_FK"
                        value={inputs.breweryID_FK || ""}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div class="mb-3">
                    <label for="categoryID_FK" class="form-label">
                        Category
                    </label>
                    <br />
                    <small>Tenative logic is to have the backend create categories during the 1:M linking if they don't exist</small>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Category"
                        name="categoryID_FK"
                        value={inputs.categoryID_FK || ""}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button
                    class="btn btn-success"
                    onClick={handleSubmit}
                >
                    Submit Beverage
                </button>

            </form>
        </div>
    )
}

export default BeverageAdd;