import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { Button } from "@mui/material";
//This componet is used on the home page for the beverage cards

function TagTableRow({ tag, onDelete, onEdit }) {
    let navigate = useNavigate();
    const tagLink = "/tag-detail/" + tag.tagID;

    //Submit data to backend
    const handleDelete = async (e) => {
        e.preventDefault();
        const data = {}

        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
            body: JSON.stringify(data),
        }

        const response = await fetch(`https://brew-review-backend.herokuapp.com/tag/delete-tag/${tag.tagID}`, requestOptions);
        if (response.status === 200) {
            //alert("Successfully delete the Tag: " + tag.name);

        }
        else {
            //alert(`Failed to delete Tag, status code = ${response.status}`);

        }
        navigate("/tag-list")
        console.log(response)

    };

    return (
        <li >
            <div class="col-8 clearfix">
                {tag.Name}
                
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
                        onClick={() => onEdit(tag)}>
                        Edit
                    </button>
               
            </div>
        </li>
    );
}
export default TagTableRow;