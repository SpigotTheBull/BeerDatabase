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
                    <div class="col-md">
                        <form>
                            <h1>Create new Beverage</h1>

                            <div class="mb-3">
                                <label for="name" class="form-label">
                                    Beverage Name
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Beverage Name"
                                    name="name"
                                />
                            </div>
                            <div class="mb-3">
                            <label for="ABV" class="form-label">
                                ABV
                            </label>
                            <input
                                type="number"
                                class="form-control"
                                placeholder="0.00"
                                name="ABV"
                            />
                            </div>
                            <div class="mb-3">
                            <label for="Brewery" class="form-label">
                            Brewery
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Brewery"
                                name="Brewery"
                            />
                            </div>
                            <div class="mb-3">
                            <label for="Brewery" class="form-label">
                            Brewery
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Category"
                                name="Category"
                            />
                            </div>

                            <button class="btn btn-success">
                                Add Beverage
                            </button>

                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomePage;