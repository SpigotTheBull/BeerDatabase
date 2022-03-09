import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import BeverageEdit from '../../components/Beverage/BeverageEdit';

export const EditBeverage = ({beverageToEdit}) => {


    return (
        <>
            <section class="py-4 my-5">
                <div class="container ">
                    <div class="col-md">
                        <h1>Edit Beverage</h1>
                        
                        <BeverageEdit beverageToEdit={beverageToEdit}/>

                    </div>
                </div>
            </section>
        </>
    );
}

export default EditBeverage;