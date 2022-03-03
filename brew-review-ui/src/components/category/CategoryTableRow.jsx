import React from "react";
import { Link } from "react-router-dom";
//This componet is used on the home page for the beverage cards

function CategoryTableRow({ category }) {
    const categoryNameLink = "/category-detail/" + category.categoryID;
    const categoryTypeLink = "/category-detail/" + category.parentCategoryID;
    return (
        <tr>

            <td><Link to={categoryTypeLink}>{category.Type}</Link></td>
            <td><Link to={categoryNameLink}>{category.Name} TODO fix link</Link></td>
            <td>
                <Link to="#">
                    <button type="button" class="btn btn-danger btn-sm m-2">Delete</button>
                </Link>
                <Link to="../edit-category">
                    <button type="button" class="btn btn-warning btn-sm m-2">Edit</button>
                </Link></td>
        </tr>
    );
}
export default CategoryTableRow;