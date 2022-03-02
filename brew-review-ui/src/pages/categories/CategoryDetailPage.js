import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {useLocation} from "react-router-dom";
import { Link } from 'react-router-dom';

import {  useParams } from 'react-router-dom';
import Beverage from '../../components/Beverage/Beverage';
import BeverageList from '../../components/Beverage/BeverageList';

function CategoryDetail() {
    
    const [beverages, setBeverages] = useState([]);

    //The slug is the categoryID
    const slug = useParams();

    //useEffect calls loadBeverage() to get the Beverage data asyncronously.
    useEffect(() => {
        loadBeverages();
    }, []);

    const loadBeverages =  async () => {
        await fetch(`https://brew-review-backend.herokuapp.com/beverage/category/${slug.slug}`)
        .then(responce => responce.json())
        .then(receivedData => setBeverages(receivedData));
    }
    console.log(beverages)


    return (
        <div className="page-container">

            <section class="py-4 my-5">
                <div class="container ">
                    <div class="row">
                        <div class="col-12">
                            <h2 class="mb-3 col-4">Beverages by "Type - Category name"</h2>


                            <Link to="../add-beverage">
                                <button type="button" class="btn btn-success" href="">Create new Beverage</button>
                            </Link>

                            <p> Tentative logic: Select beverages with matching category and display below</p>
                        </div>
                        <BeverageList beverage={beverages} ></BeverageList>
                  
                    </div>
                </div>
            </section>            
        </div>
        
    )
}

export default CategoryDetail;