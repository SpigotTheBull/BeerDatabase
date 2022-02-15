import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function EditCategory() {
    const history = useNavigate();

    return (
        <>
            <section class="py-4 my-5">
                <div class="container ">
                    <div class="col-md">
                    <h1>Edit category</h1>
                            <h2>Alcohol Type</h2>
                        <form>
                            <div class="mb-3">
                                <label for="parent-category" class="form-label">
                                    Type
                                </label>
                                <br />
                                <small>First textbox will contain the parent category and the second textbox contains the category</small>
                                <input class="form-control" name="parent-category" placeholder="Contains parent category">
                                </input>

                            </div>
                            <div class="mb-3">
                                <label for="category" class="form-label">
                                    Category
                                </label>
                                <input class="form-control" name="category" placeholder="Contains category">

                                </input>
                            </div>


                            <button class="btn btn-success">
                                Edit Category
                            </button>

                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default EditCategory;