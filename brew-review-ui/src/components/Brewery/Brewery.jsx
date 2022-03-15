import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//This componet is used on the home page for the beverage cards

function Brewery({brewery, onDelete, onEdit}) {
    const breweryLink = "/brewery-detail/" + brewery.breweryID;

    
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

        const response = await fetch(`https://brew-review-backend.herokuapp.com/brewery/delete-brewery/${brewery.breweryID}`, requestOptions);
        if (response.status === 200) {
            //alert("Successfully delete the Brewery: " + data.nameInput);
            navigate("/")
        }
        else {
            //alert(`Failed to delete Brewery, status code = ${response.status}`);
            navigate("/")
        }
        navigate("/")
        console.log(response)

    };
    return (

        <div class="col-md-6 col-lg-4 mb-4">
            <div class="card">
                <div class="card-body">
                    <Link to={breweryLink}>
                    <h5 class="card-title">{brewery.Brewery}</h5>
                    </Link>

                    <ul class="card-text">
                        
                        <li>{brewery.Street_Number} {brewery.Street_Name}, {brewery.City}, {brewery.State} {brewery.Zip_Code}</li>
                        <li><a href={brewery.Website}>Website</a> </li>
                    </ul>
                    <div>
                        <button 
                        type="button" 
                        class="btn btn-danger btn-sm m-2"
                        onClick={handleDelete}>
                            Delete
                        </button>
                        <Link to="/edit-brewery">
                            <button type="button" class="btn btn-warning btn-sm m-2"  onClick={() => onEdit(brewery)}>Edit</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brewery;