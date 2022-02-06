import { useState, eseEffect, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function HomePage() {
    const history = useNavigate();

    return (
        <>
            <section class="py-4 my-5">
                <div class="container ">
                    <div class="row">
                        <div class="col-12">
                            <h2 class="mb-3">List of Beverages</h2>
                            <Link to="add-beverage">
                                <button type="button" class="btn btn-success" href="">Create new Beverage</button>
                            </Link>

                            <p> Tenative logic: For every beverage in beverage table create a card</p>
                        </div>

                        <div class="col-md-6 col-lg-4 mb-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Beverage name</h5>

                                    <ul class="card-text">
                                        <li>ABV value: ##%</li>
                                        <li><a href="#">Category name</a></li>
                                        <li><a href="#">Brewery Name</a></li>
                                    </ul>
                                    <div>
                                        <button href="#" class="btn btn-primary m-2">Read Reviews</button>
                                        <button type="button" class="btn btn-danger btn-sm m-2">Delete</button>
                                        <button type="button" class="btn btn-warning btn-sm m-2">Edit</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sample cards below. TODO implement card as a componet*/}
                        <div class="col-md-6 col-lg-4 mb-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Beverage name</h5>

                                    <ul class="card-text">
                                        <li>ABV value: ##%</li>
                                        <li><a href="#">Category name</a></li>
                                        <li><a href="#">Brewery Name</a></li>
                                    </ul>
                                    <div>
                                        <button href="#" class="btn btn-primary m-2">Read Reviews</button>
                                        <button type="button" class="btn btn-danger btn-sm m-2">Delete</button>
                                        <button type="button" class="btn btn-warning btn-sm m-2">Edit</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4 mb-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Beverage name</h5>

                                    <ul class="card-text">
                                        <li>ABV value: ##%</li>
                                        <li><a href="#">Category name</a></li>
                                        <li><a href="#">Brewery Name</a></li>
                                    </ul>
                                    <div>
                                        <button href="#" class="btn btn-primary m-2">Read Reviews</button>
                                        <button type="button" class="btn btn-danger btn-sm m-2">Delete</button>
                                        <button type="button" class="btn btn-warning btn-sm m-2">Edit</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4 mb-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Beverage name</h5>

                                    <ul class="card-text">
                                        <li>ABV value: ##%</li>
                                        <li><a href="#">Category name</a></li>
                                        <li><a href="#">Brewery Name</a></li>
                                    </ul>
                                    <div>
                                        <button href="#" class="btn btn-primary m-2">Read Reviews</button>
                                        <button type="button" class="btn btn-danger btn-sm m-2">Delete</button>
                                        <button type="button" class="btn btn-warning btn-sm m-2">Edit</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4 mb-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Beverage name</h5>

                                    <ul class="card-text">
                                        <li>ABV value: ##%</li>
                                        <li><a href="#">Category name</a></li>
                                        <li><a href="#">Brewery Name</a></li>
                                    </ul>
                                    <div>
                                        <button href="#" class="btn btn-primary m-2">Read Reviews</button>
                                        <button type="button" class="btn btn-danger btn-sm m-2">Delete</button>
                                        <button type="button" class="btn btn-warning btn-sm m-2">Edit</button>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </section>
        </>
    );
}

export default HomePage;