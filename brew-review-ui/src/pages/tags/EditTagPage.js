import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function EditTag() {
    const history = useNavigate();

    return (
        <>
            <section class="py-4 my-5">
                <div class="container ">
                    <div class="col-md">
                        <form>
                            <h1>Edit Tag</h1>
                            <p>To do: Populate this page with the data being edited</p>

                            <div class="mb-3">
                                <label for="name" class="form-label">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Tag name"
                                    name="name"
                                />
                            </div>
                            
                            <button class="btn btn-success">
                                Edit Tag
                            </button>

                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default EditTag;