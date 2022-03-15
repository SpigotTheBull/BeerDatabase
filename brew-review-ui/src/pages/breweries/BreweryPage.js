import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import Brewery from '../../components/Brewery/Brewery';
import BreweryList from '../../components/Brewery/BreweryList';


function Breweries({setBreweryToEdit}) {
    const [breweries, setBreweries] = useState([]);
    let navigate = useNavigate();
    
    //useEffect calls loadBeverage() to get the Beverage data asyncronously.
    useEffect(() => {
        loadBreweries();
    }, []);

    const loadBreweries =  async () => {
        await fetch('https://brew-review-backend.herokuapp.com/brewery/')
        .then(responce => responce.json())
        .then(receivedData => setBreweries(receivedData));
    }
    console.log(breweries)
    
    const onEdit = breweryToEdit =>{
        const breweryEditLink = "/edit-brewery";
        setBreweryToEdit(breweryToEdit);        
        navigate(breweryEditLink);
    }

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
                        <BreweryList brewery={breweries} onEdit={onEdit} > </BreweryList>
                        
                        
                    </div>
                </div>
            </section>            
        </div>
        
    )
}

export default Breweries;