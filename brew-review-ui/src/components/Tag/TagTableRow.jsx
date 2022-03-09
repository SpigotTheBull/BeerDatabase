import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { Button } from "@mui/material";
//This componet is used on the home page for the beverage cards

function TagTableRow({ tag, onDelete, onEdit }) {
    let navigate = useNavigate();
    const tagLink = "/tag-detail/" + tag.tagID;


    return (
        <tr>
            <td>{tag.Name}</td>
            <td>
                <Link to="#">
                    <button type="button" class="btn btn-danger btn-sm m-2">Delete</button>
                </Link>
                <button type="button" class="btn btn-warning btn-sm m-2" onClick={() => onEdit(tag)}>Edit</button>
            </td>
        </tr>
    );
}
export default TagTableRow;