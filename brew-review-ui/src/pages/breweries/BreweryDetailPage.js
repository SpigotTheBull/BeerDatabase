import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import Brewery from '../../components/Brewery/Brewery';


import {  useParams } from 'react-router-dom';
import BeverageList from '../../components/Beverage/BeverageList';
import BreweryList from '../../components/Brewery/BreweryList';

function BreweryDetail() {

       
    const [beverages, setBeverages] = useState([]);

    //The slug is the breweryID
    const slug = useParams();

    //useEffect calls loadBeverage() to get the Beverage data asyncronously.
    useEffect(() => {
        loadBeverages();
    }, []);

    const loadBeverages =  async () => {
        await fetch(`https://brew-review-backend.herokuapp.com/beverage/brewery/${slug.slug}`)
        .then(responce => responce.json())
        .then(receivedData => setBeverages(receivedData));
    }
    console.log(beverages)

    const [breweries, setBreweries] = useState([]);

    //useEffect calls loadBeverage() to get the Beverage data asyncronously.
    useEffect(() => {
        loadBreweries();
    }, []);

    const loadBreweries =  async () => {
        await fetch(`https://brew-review-backend.herokuapp.com/brewery/${slug.slug}`)
        .then(responce => responce.json())
        .then(receivedData => setBreweries(receivedData));
    }
    console.log(breweries)
    
    return (
        <div className="page-container">

            <section class="py-4 my-5">
                <div class="container ">
                    <div class="row">
                        <div class="col-12">
                            <h2 class="mb-3 col-4">Beverages by </h2>
                            <BreweryList brewery={breweries}></BreweryList>

                            <Link to="../add-beverage">
                                <button type="button" class="btn btn-success" href="">Create new Beverage</button>
                            </Link>

                            <p> Tentative logic: For every Beverage in Beverage table create a card if it matches this brewery</p>
                        </div>
                        <BeverageList beverage={beverages} ></BeverageList>                 
                    </div>
                </div>
            </section>            
        </div>
        
    )
}

export default BreweryDetail;