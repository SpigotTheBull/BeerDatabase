import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import { useNavigate } from "react-router";

//This componet is used on the add brewery page

function BreweryAdd() {
    let navigate = useNavigate();

    const [nameInput, setNameInput] = React.useState();
    const [streetNumberInput, setStreetNumberInput] = React.useState();
    const [streetNameInput, setStreetNameInput] = React.useState();
    const [cityInput, setCityInput] = React.useState();
    const [zipCodeInput, setZipCodeInput] = React.useState();
    const [stateInput, setStateInput] = React.useState();
    const [websiteInput, setWebsiteInput] = React.useState();

    //Submit data to backend
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {nameInput, streetNumberInput, streetNameInput, cityInput, zipCodeInput, stateInput, websiteInput}

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
            body: JSON.stringify(data),
        }

        const response = await fetch('https://brew-review-backend.herokuapp.com/brewery', requestOptions);
        if (response.status === 200) {
            //alert("Successfully added the Brewery: " + data.nameInput);
        }
        else {
            //alert(`Failed to add Brewery, status code = ${response.status}`);
        }
        console.log(response)
        navigate("/brewery/")
    };

    return (
        <div>            
            <form>
                <div class="mb-3">
                    <label for="name" class="form-label">
                        Brewery Name
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Brewery Name"
                        name="name"
                        value={nameInput || ""}
                        onChange={(e) => setNameInput(e.target.value)}
                        required
                    />
                </div>
                <div class="mb-3">
                    <label for="streetNumber" class="form-label">
                        Street Number
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Street Number"
                        name="streetNumber"
                        value={streetNumberInput || ""}
                        onChange={(e) => setStreetNumberInput(e.target.value)}
                        required
                    />
                </div>
                <div class="mb-3">
                    <label for="streetName" class="form-label">
                        Street Name
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Street Name"
                        name="streetName"
                        value={streetNameInput || ""}
                        onChange={(e) => setStreetNameInput(e.target.value)}
                        required
                    />
                </div>
                <div class="mb-3">
                    <label for="city" class="form-label">
                        City
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="City"
                        name="city"
                        value={cityInput || ""}
                        onChange={(e) => setCityInput(e.target.value)}
                        required
                    />
                </div>
                <div class="mb-3">
                    <label for="state" class="form-label">
                        State
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="State"
                        name="state"
                        value={stateInput || ""}
                        onChange={(e) => setStateInput(e.target.value)}
                        required
                    />
                </div>
                <div class="mb-3">
                    <label for="zipCode" class="form-label">
                        Zip Code
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Zip Code"
                        name="zipCode"
                        value={zipCodeInput || ""}
                        onChange={(e) => setZipCodeInput(e.target.value)}
                        required

                    />
                </div>
                <div class="mb-3">
                    <label for="website" class="form-label">
                        Website
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Website"
                        name="website"
                        value={websiteInput || ""}
                        onChange={(e) => setWebsiteInput(e.target.value)}
                        required
                    />
                </div>
                <button
                    class="btn btn-success"
                    onClick={handleSubmit}
                >
                    Submit Brewery
                </button>

            </form>
        </div>
    )
}

export default BreweryAdd;