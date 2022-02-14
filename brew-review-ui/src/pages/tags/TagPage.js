import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function Tags() {

    return (
        <section class="py-4 my-5">
            <div class="container ">
                <div class="row">
                    <div class="col-10">
                        <div className="page-container">
                            <h1 class="h1">To do: Populate this page with tags</h1>
                            <h2 class="h2">Tag name</h2>
                            <Link to="../add-tag">
                            <button class="btn btn-success">New Tag</button>
                            </Link>
                            <table class="table">
                                <tr>
                                    <th>Name</th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <td><Link to="../tag-detail">Hoppy</Link></td>
                                    <td>        
                                        <Link to="#">                
                                        <button type="button" class="btn btn-danger btn-sm m-2">Delete</button>
                                        </Link>
                                        <Link to="../edit-tag">
                                            <button type="button" class="btn btn-warning btn-sm m-2">Edit</button>
                                        </Link></td>
                                </tr>
                                <tr>
                                    <td><Link to="../tag-detail">Bitter</Link></td>
                                    <td>
                                        <Link to="#">
                                            <button type="button" class="btn btn-danger btn-sm m-2">Delete</button>
                                        </Link>
                                        <Link to="../edit-tag">
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

export default Tags;