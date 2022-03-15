import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import CategoryEdit from '../../components/category/CategoryEdit';

export const EditCategory = ({categoryToEdit}) => {
    console.log("editCategory received: ", categoryToEdit )

    return (
        <>
            <section class="py-4 my-5">
                <div class="container ">
                    <div class="col-md">
                    <h1>Edit category</h1>
                            <h2>Alcohol Type</h2>
<CategoryEdit categoryToEdit={categoryToEdit}/>
                    </div>
                </div>
            </section>
        </>
    );
}

export default EditCategory;