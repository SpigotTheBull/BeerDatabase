import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function ParentCategory() {

    return (
        <section class="py-4 my-5">
            <div class="container ">
                <div class="row">
                    <div class="col-10">
                        <div className="page-container">
                            <h1 class="h1">To do: Populate this page with parent categories(types)</h1>
                            <Link to="../add-parent-category">
                                <button class="btn btn-success">New Parent Category</button>
                            </Link>
                            <table class="table">
                                <tr>
                                    <th>Type</th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <td><Link to="../parent-category-detail">Beer</Link></td>
                                    <td>
                                        <Link to="#">
                                            <button type="button" class="btn btn-danger btn-sm m-2">Delete</button>
                                        </Link>
                                        <Link to="../edit-parent-category">
                                            <button type="button" class="btn btn-warning btn-sm m-2">Edit</button>
                                        </Link></td>
                                </tr>
                                <tr>
                                    <td><Link to="../parent-category-detail">Wine</Link></td>
                                    <td>
                                        <Link to="#">
                                            <button type="button" class="btn btn-danger btn-sm m-2">Delete</button>
                                        </Link>
                                        <Link to="../edit-parent-category">
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

export default ParentCategory;