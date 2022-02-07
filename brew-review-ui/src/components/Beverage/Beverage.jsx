import React from "react";
import { Link } from "react-router-dom";
//This componet is used on the home page for the beverage cards

function Beverage() {
    return (

        <div class="col-md-6 col-lg-4 mb-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Beverage name</h5>

                    <ul class="card-text">
                        <li>ABV value: ##%</li>
                        <li><Link to="/category">Category name</Link></li>
                        <li><Link to="/brewery">Brewery Name</Link></li>
                    </ul>
                    <div>
                        <Link to="/reviews">
                            <button class="btn btn-primary m-2">Read Reviews</button>
                        </Link>
                        <button type="button" class="btn btn-danger btn-sm m-2">Delete</button>
                        <Link to="/edit-beverage">
                            <button type="button" class="btn btn-warning btn-sm m-2">Edit</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Beverage;