import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function AddParentCategory() {
    const history = useNavigate();

    return (
        <>
            <section class="py-4 my-5">
                <div class="container ">
                    <div class="col-md col-8">
                        <h1>Create new category</h1>
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
                            <button class="btn btn-success">
                                Add Parent Category
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AddParentCategory;