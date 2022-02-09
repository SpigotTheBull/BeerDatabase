import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function Category() {

    return (
        <section class="py-4 my-5">
            <div class="container ">
                <div class="row">
                    <div class="col-10">
                        <div className="page-container">
                            <h1 class="h1">To do: Populate this page with categories</h1>
                            <h2 class="h2">Category name</h2>
                            <ul>
                                <li>Type of alcohol (parent category)</li>
                                <li>Category name</li>
                            </ul>
                            <Link to="../add-category">
                            <button class="btn btn-success">New Category</button>
                            </Link>
                            <table class="table">
                                <tr>
                                    <th>Type</th>
                                    <th>Name</th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <td>Beer</td>
                                    <td>Irish IPA</td>
                                    <td>        
                                        <Link to="#">                
                                        <button type="button" class="btn btn-danger btn-sm m-2">Delete</button>
                                        </Link>
                                        <Link to="../edit-category">
                                            <button type="button" class="btn btn-warning btn-sm m-2">Edit</button>
                                        </Link></td>
                                </tr>
                                <tr>
                                    <td>Wine</td>
                                    <td>Chardonnay</td>
                                    <td>
                                        <Link to="#">
                                            <button type="button" class="btn btn-danger btn-sm m-2">Delete</button>
                                        </Link>
                                        <Link to="../edit-category">
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

export default Category;