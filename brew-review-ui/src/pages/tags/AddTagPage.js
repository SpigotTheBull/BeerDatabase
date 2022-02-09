import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function AddTag() {
    const history = useNavigate();

    return (
        <>
            <section class="py-4 my-5">
                <div class="container ">
                    <div class="col-md col-8">
                        <form>
                            <h1>Create new tag</h1>
                            <div class="mb-3">
                                <label for="parent-category" class="form-label">
                                    Name
                                </label>
                                <br/>
                                <small>Contains name of tag</small>
                                <input class="form-control" name="parent-category" placeholder="Tag">
                                    
                                </input> 

                            </div>
                            <button class="btn btn-success">
                                Add Tag
                            </button>

                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AddTag;