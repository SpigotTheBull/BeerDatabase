import { useState, useEffect } from 'react';

import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import ParentCategoryEdit from '../../components/ParentCategory/ParentCategoryEdit';

export const EditParentCategory = ({parentCategoryToEdit}) => {
    console.log("editParentCategory received: ", parentCategoryToEdit )
    return (
        <>
            <section class="py-4 my-5">
                <div class="container ">
                    <div class="col-md">
                        <h1>Edit Parent Category</h1>
                        <ParentCategoryEdit parentCategoryToEdit={parentCategoryToEdit}/>
                    </div>
                </div>
            </section>
        </>
    );
}

export default EditParentCategory;