import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import Beverage from '../components/Beverage/Beverage';
import BeverageList from '../components/Beverage/BeverageList';

function HomePage() {
    const history = useNavigate();

    const [beverage, setBeverage] = useState([]);

    const loadBeverage = async () => {
        const response = await fetch('https://brew-review-backend.herokuapp.com/beverage/');
        const data = await response.json();
        setBeverage(data);
    }
    //useEffect calls loadBeverage() to get the Beverage data asyncronously.
    useEffect(() => {
        loadBeverage();
    }, []);

    return (
        <>
            <section class="py-4 my-5">
                <div class="container ">
                    <div class="row">
                        <div class="col-12">
                            <h2 class="mb-3">List of Beverages</h2>
                            <Link to="add-beverage">
                                <button type="button" class="btn btn-success" href="">Create new Beverage</button>
                            </Link>

                            <p> Tentative logic: For every beverage in beverage table create a card</p>
                        </div>

                        <BeverageList beverage={beverage} ></BeverageList>
                        <Beverage />
                        <Beverage />
                        <Beverage />
                        <Beverage />
                        <Beverage />
                        <Beverage />
                        
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomePage;