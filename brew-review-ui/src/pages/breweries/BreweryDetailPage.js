import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import Brewery from '../../components/Brewery/Brewery';
import Beverage from '../../components/Beverage/Beverage';


function BreweryDetail() {
    
    return (
        <div className="page-container">

            <section class="py-4 my-5">
                <div class="container ">
                    <div class="row">
                        <div class="col-12">
                            <h2 class="mb-3 col-4">Beverages by "Brewery name"</h2>
                            <Brewery />

                            <Link to="../add-beverage">
                                <button type="button" class="btn btn-success" href="">Create new Beverage</button>
                            </Link>

                            <p> Tentative logic: For every Beverage in Beverage table create a card if it matches this brewery</p>
                        </div>
                        <Beverage />
                        <Beverage />
                        <Beverage />
                        <Beverage />
                        <Beverage />                   
                    </div>
                </div>
            </section>            
        </div>
        
    )
}

export default BreweryDetail;