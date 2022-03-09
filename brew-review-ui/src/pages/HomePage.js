import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BeverageList from '../components/Beverage/BeverageList';
import { useNavigate } from "react-router-dom";

function HomePage({setBeverageToEdit}) {
    const [beverages, setBeverages] = useState([]);
    let navigate = useNavigate();

    //useEffect calls loadBeverage() to get the Beverage data asyncronously.
    useEffect(() => {
        loadBeverages();
    }, []);

    const loadBeverages =  async () => {
        await fetch('https://brew-review-backend.herokuapp.com/beverage/')
        .then(responce => responce.json())
        .then(receivedData => setBeverages(receivedData));
    }
    console.log(beverages)

    const onEdit = beverageToEdit =>{
        const beverageEditLink = "/edit-beverage";
        setBeverageToEdit(beverageToEdit);        
        navigate(beverageEditLink);
    }

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

                        <BeverageList beverage={beverages} onEdit={onEdit}></BeverageList>
                        
                        
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomePage;