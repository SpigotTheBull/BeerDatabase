import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import BeverageAdd from '../../components/Beverage/BeverageAdd';


function AddBeverage() {
    const history = useNavigate();

    return (
        <>
            <section class="py-4 my-5">
                <div class="container ">
                    <div class="col-md">
                        <h1>Create new Beverage</h1>
                        <BeverageAdd />
                    </div>
                </div>
            </section>
        </>
    );
}

export default AddBeverage;