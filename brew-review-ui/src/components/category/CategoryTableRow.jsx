import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//This componet is used on the home page for the beverage cards

function CategoryTableRow({ category, onDelete, onEdit }) {
    const categoryNameLink = "/category-detail/" + category.categoryID;
    const categoryTypeLink = "/category-detail/" + category.parentCategoryID;

    let navigate = useNavigate();

    //Submit data to backend
    const handleDelete = async (e) => {
        e.preventDefault();
        const data = {}

        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
            body: JSON.stringify(data),
        }

        const response = await fetch(`https://brew-review-backend.herokuapp.com/category/delete-category/${category.categoryID}`, requestOptions);
        if (response.status === 200) {
            alert("Successfully delete the Category: " + category.name);

        }
        else {
            alert(`Failed to delete Category, status code = ${response.status}`);

        }
        navigate("/category")
        console.log(response)

    };

    return (

        <div class="col-8 clearfix">

            {category.Type} - <Link to={categoryNameLink}>{category.Name}</Link>

            <button
                type="button"
                class="btn btn-danger btn-sm m-2 float-end"
                onClick={handleDelete}
            >
                Delete
            </button>


            <button
                type="button"
                class="btn btn-warning btn-sm m-2 float-end"
                onClick={() => onEdit(category)}
            >
                Edit
            </button>

        </div>
    );
}
export default CategoryTableRow;