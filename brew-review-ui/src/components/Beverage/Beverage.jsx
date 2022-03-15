import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//This componet is used on the home page for the beverage cards

function Beverage({beverage, onDelete, onEdit}) {
    const categoryLink = "/category-detail/" + beverage.categoryID;
    const breweryLink = "/brewery-detail/" + beverage.breweryID;
    const reviewLink = "/review/" + beverage.beverageID;

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
    
            const response = await fetch(`https://brew-review-backend.herokuapp.com/beverage/delete-beverage/${beverage.beverageID}`, requestOptions);
            if (response.status === 200) {
                //alert("Successfully delete the Beverage: " + data.nameInput);
                navigate("/")
            }
            else {
                //alert(`Failed to delete Beverage, status code = ${response.status}`);
                navigate("/")
            }
            navigate("/")
            console.log(response)

        };

    return (

        <div class="col-md-6 col-lg-4 mb-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{beverage.Beverage_Name}</h5>

                    <ul class="card-text">
                        <li>ABV value: {beverage.ABV}</li>

                        <li><Link to={categoryLink}>{beverage.Category}</Link></li>
                        <li><Link to={breweryLink}>{beverage.Brewery}</Link></li>
                    </ul>
                    <div>
                        <Link to={reviewLink}>
                            <button class="btn btn-primary m-2">Read Reviews</button>
                        </Link>
                        <button 
                        type="button" 
                        class="btn btn-danger btn-sm m-2"
                        onClick={handleDelete}>
                            Delete
                        </button>
                        <Link to="/edit-beverage">
                            <button type="button" class="btn btn-warning btn-sm m-2" onClick={() => onEdit(beverage)}>Edit</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Beverage;