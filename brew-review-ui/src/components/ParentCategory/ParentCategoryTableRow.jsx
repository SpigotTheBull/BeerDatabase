import React from "react";
import { Link } from "react-router-dom";
//This componet is used on the home page for the beverage cards

function ParentCategoryTableRow({ parentCategory }) {
    const ParentCategoryLink = "/parent-category-detail/" + parentCategory.parentCategoryID;

    return (
        <tr>
            <td><Link to={ParentCategoryLink}>{parentCategory.Type} TODO fix link</Link></td>
            <td>
                <Link to="#">
                    <button type="button" class="btn btn-danger btn-sm m-2">Delete</button>
                </Link>
                <Link to="../edit-tag">
                    <button type="button" class="btn btn-warning btn-sm m-2">Edit</button>
                </Link></td>
        </tr>
    );
}
export default ParentCategoryTableRow;