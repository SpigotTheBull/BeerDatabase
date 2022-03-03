import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import BeverageForm from '../../components/Beverage/BeverageForm';

function HomePage() {


    return (
        <>
            <section class="py-4 my-5">
                <div class="container ">
                    <div class="col-md">
                        <h1>Edit Beverage</h1>
                        <p>To do: Populate this page with the data being edited</p>
                        <BeverageForm />

                    </div>
                </div>
            </section>
        </>
    );
}

export default HomePage;