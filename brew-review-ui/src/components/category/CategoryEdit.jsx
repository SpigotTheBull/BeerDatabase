import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import { useNavigate } from "react-router";

//Auto complete stuff
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
//This componet is used on the /add-parent-category page for making parent categories

export const CategoryEdit = ({ categoryToEdit }) => {
    console.log(categoryToEdit)
    let navigate = useNavigate();

    const [nameInput, setNameInput] = React.useState(categoryToEdit.Name);
    const [categoryID, setCategoryID] = React.useState(categoryToEdit.categoryID);
    const [parentCategoryID_FK, setParentCategoryID_FK] = React.useState(categoryToEdit.parentCategoryID);


    //Submit data to backend
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { nameInput, parentCategoryID_FK }


        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        }
        console.log(requestOptions)

        const response = await fetch(`https://brew-review-backend.herokuapp.com/category/edit-category/${categoryID}`, requestOptions);
        if (response.status === 200) {
            //alert("Successfully edit the Category: " + data.nameInput);
        }
        else {
            //alert(`Failed to edit Category, status code = ${response.status}`);
        }
        console.log(response)
        navigate("/category")
    };

     // Get parent Categories
     const [parentCategory, setParentCategory] = useState([]);

     //useEffect calls loadBeverage() to get the Beverage data asyncronously.
     useEffect(() => {
         loadParentCategory();
     }, []);
 
     const loadParentCategory = async () => {
         await fetch('https://brew-review-backend.herokuapp.com/parent-category/')
             .then(responce => responce.json())
             .then(receivedData => setParentCategory(receivedData));
     }

    return (
        <>
            <form>
                <div class="mb-3">
                    <label for="nameInput" class="form-label">
                        Category Name
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
                <div class="mb-3">
                    <label for="parentCategoryID" class="form-label">
                        Parent Category
                    </label>
                    <br />
                    <Autocomplete
                        value={parentCategoryID_FK}
                        onChange={(event, newValue) => {
                            setParentCategoryID_FK(newValue.parentCategoryID);
                        }}
                        disablePortal
                        options={parentCategory}
                        getOptionLabel={(option) => option.Type}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params}
                            label="Parent Category"
                        />}
                    />
                </div>
                <button
                    class="btn btn-success"
                    onClick={handleSubmit}
                >
                    Edit
                </button>

            </form>
        </>
    )
};
export default CategoryEdit;