import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

import Beverage from '../../components/Beverage/Beverage';


function TagDetail() {
    
    return (
        <div className="page-container">

            <section class="py-4 my-5">
                <div class="container ">
                    <div class="row">
                        <div class="col-12">
                            <h2 class="mb-3 col-4">Beverages by "tag name"</h2>

                            <p> Tentative logic: Select beverages with matching review tag sort by most to least matches and display below</p>
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

export default TagDetail;