import React from "react";
import { Link } from "react-router-dom";
//This componet is used on the home page for the beverage cards

function Brewery({brewery}) {
    const breweryLink = "/brewery-detail/" + brewery.breweryID;
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
                        <button type="button" class="btn btn-danger btn-sm m-2">Delete</button>
                        <Link to="/edit-brewery">
                            <button type="button" class="btn btn-warning btn-sm m-2">Edit</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brewery;