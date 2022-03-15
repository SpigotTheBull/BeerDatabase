import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import { useNavigate } from "react-router";

//Auto complete stuff
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
//This componet is used on the home page for the beverage cards

function BeverageAdd() {
    let navigate = useNavigate();

    const [nameInput, setNameInput] = React.useState();
    const [abvInput, setAbvInput] = React.useState();
    const [breweryID_FK, setBreweryID_FK] = React.useState();
    const [categoryID_FK, setCategoryID_FK] = React.useState();

    //Submit data to backend
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {nameInput, abvInput, breweryID_FK, categoryID_FK}

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
            body: JSON.stringify(data),
        }

        const response = await fetch('https://brew-review-backend.herokuapp.com/beverage', requestOptions);
        if (response.status === 200) {
            //alert("Successfully added the Beverage: " + data.nameInput);
        }
        else {
            //alert(`Failed to add Beverage, status code = ${response.status}`);
        }
        console.log(response)
        navigate("/")
    };

    //Get a pool of possible breweries
    const [breweries, setBreweries] = useState([]);

    //useEffect calls loadBeverage() to get the Beverage data asyncronously.
    useEffect(() => {
        loadBreweries();
    }, []);

    const loadBreweries =  async () => {
        await fetch('https://brew-review-backend.herokuapp.com/brewery/')
        .then(responce => responce.json())
        .then(receivedData => setBreweries(receivedData));
    }
    console.log(breweries)


    // Get a pool of posible Categories
    const [category, setCategory] = useState([]);

    //useEffect calls loadBeverage() to get the Beverage data asyncronously.
    useEffect(() => {
        loadCategory();
    }, []);

    const loadCategory = async () => {
        await fetch('https://brew-review-backend.herokuapp.com/category/')
            .then(responce => responce.json())
            .then(receivedData => setCategory(receivedData));
    }
    console.log(category)

    return (
        <div>
            <form>
                <div class="mb-3">
                    <label for="nameInput" class="form-label">
                        Beverage Name
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Beverage Name"
                        name="nameInput"
                        value={nameInput || ""}
                        onChange={(e) => setNameInput(e.target.value)}
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
                        value={abvInput || ""}
                        onChange={(e) => setAbvInput(e.target.value)}
                        required
                    />
                </div>
                <div class="mb-3">
                    <label for="breweryID_FK" class="form-label">
                        Brewery
                    </label>
                    {/** <input
                        type="text"
                        class="form-control"
                        placeholder="Brewery"
                        name="breweryID_FK"
                        value={inputs.breweryID_FK || ""}
                        onChange={handleChange}
                        required
                    /> */}
                    <Autocomplete
                        value={breweryID_FK}
                        onChange={(event, newValue) => {
                            setBreweryID_FK(newValue.breweryID);
                          }}
                        disablePortal
                        options={breweries}
                        getOptionLabel={(option) => option.Brewery}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} 
                        label="Brewery"  
                        />}
                    />

                </div>
                <div class="mb-3">
                    <label for="categoryID_FK" class="form-label">
                        Category
                    </label>
                    <br />
                    {/**Phased out
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Category"
                        name="categoryID_FK"
                        value={inputs.categoryID_FK}
                        onChange={handleChange}
                        required
                    /> */}
                     <Autocomplete
                        value={categoryID_FK}
                        onChange={(event, newValue) => {
                            setCategoryID_FK(newValue.categoryID);
                          }}
                        disablePortal
                        options={category}
                        getOptionLabel={(option) => option.Name}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} 
                        label="Category"  
                        />}
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