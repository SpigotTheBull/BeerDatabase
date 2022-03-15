import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import BreweryEdit from '../../components/Brewery/BreweryEdit';


export const EditBrewery = ({breweryToEdit}) => {
    console.log("EditBrewery received: ", breweryToEdit )

    const history = useNavigate();

    return (
        <>
        <section class="py-4 my-5">
            <div class="container ">
                <div class="col-md">
                    <h1>Edit Brewery</h1>
                    <BreweryEdit breweryToEdit={breweryToEdit}/>
                </div>
            </div>
        </section>
    </>
    );
}

export default EditBrewery;