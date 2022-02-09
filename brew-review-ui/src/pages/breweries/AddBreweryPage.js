import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import BrewerForm from '../../components/Brewery/BreweryForm';

function AddBrewery() {
    const history = useNavigate();

    return (
        <>
            <section class="py-4 my-5">
                <div class="container ">
                    <div class="col-md">
                        <h1>Create new Brewery</h1>
                        <BrewerForm />
                    </div>
                </div>
            </section>
        </>
    );
}

export default AddBrewery;