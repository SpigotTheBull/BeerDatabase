import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import ParentCategoryAdd from '../../components/ParentCategory/ParentCategoryAdd';

function AddParentCategory() {
    const history = useNavigate();

    return (
        <>
            <section class="py-4 my-5">
                <div class="container ">
                    <div class="col-md col-8">
                        <h1>Create new category</h1>
                        <h2>Alcohol Type</h2>
                        <ParentCategoryAdd />
                    </div>
                </div>
            </section>
        </>
    );
}

export default AddParentCategory;