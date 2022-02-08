import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function Reviews() {

    return (
        <section class="py-4 my-5">
            <div class="container ">
                <div class="row">
                    <div class="col-10">
                        <div className="page-container">
                            <h1 class="h1">To do: Populate this page with reviews</h1>
                            <h2 class="h2">Beverage name</h2>
                            <ul>
                                <li>ABV value: ##%</li>
                                <li>Category name</li>
                                <li>Brewery Name</li>
                            </ul>
                            <Link to="../add-review">
                            <button class="btn btn-success">New Review</button>
                            </Link>
                            <table class="table">
                                <tr>
                                    <th>Ratting</th>
                                    <th>textReview</th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Sample data. I love this drink</td>
                                    <td>        
                                        <Link to="#">                
                                        <button type="button" class="btn btn-danger btn-sm m-2">Delete</button>
                                        </Link>
                                        <Link to="../edit-review">
                                            <button type="button" class="btn btn-warning btn-sm m-2">Edit</button>
                                        </Link></td>
                                </tr>
                                <tr>
                                    <td>-1</td>
                                    <td>This drink taste bad</td>
                                    <td>
                                        <Link to="#">
                                            <button type="button" class="btn btn-danger btn-sm m-2">Delete</button>
                                        </Link>
                                        <Link to="#">
                                            <button type="button" class="btn btn-warning btn-sm m-2">Edit</button>
                                        </Link></td>
                                </tr>
                            </table>


                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Reviews;