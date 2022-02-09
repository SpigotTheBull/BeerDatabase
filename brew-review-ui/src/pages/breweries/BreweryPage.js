import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import Brewery from '../../components/Brewery/Brewery';


function Breweries() {
    
    return (
        <div className="page-container">

            <section class="py-4 my-5">
                <div class="container ">
                    <div class="row">
                        <div class="col-12">
                            <h2 class="mb-3">Breweries</h2>

                            <Link to="/add-brewery">
                                <button type="button" class="btn btn-success" href="">Create new Brewery</button>
                            </Link>

                            <p> Tentative logic: For every Brewery in Brewery table create a card</p>
                        </div>
                        <Brewery />
                        <Brewery />
                        <Brewery />
                        <Brewery />
                        <Brewery />
                        <Brewery />

                        
                    </div>
                </div>
            </section>            
        </div>
        
    )
}

export default Breweries;