import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function EditParentCategory() {
    const history = useNavigate();

    return (
        <>
            <section class="py-4 my-5">
                <div class="container ">
                    <div class="col-md">
                        <h1>Edit Parent Category</h1>
                        <p>To do: Populate this page with the data being edited</p>
                        <form>
                            <div class="mb-3">
                                <label for="parent-category" class="form-label">
                                    Parent Category (Type)
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Parent Category (Type)"
                                    name="parent-category"
                                />
                            </div>
                            <button class="btn btn-success">
                                Edit Parent Category
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default EditParentCategory;