import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {  useParams } from 'react-router-dom';
import BeverageList from '../../components/Beverage/BeverageList';
import CategoryList from '../../components/category/CategoryList';

function CategoryDetail() {
    
    const [beverages, setBeverages] = useState([]);

    const [category, setCategory] = useState([]);

    //The slug is the categoryID
    const slug = useParams();

    // Fetch beverages in this category
    useEffect(() => {
        loadBeverages();
    }, []);

    const loadBeverages =  async () => {
        await fetch(`https://brew-review-backend.herokuapp.com/beverage/category/${slug.slug}`)
        .then(responce => responce.json())
        .then(receivedData => setBeverages(receivedData));
    }
    console.log(beverages)

    // Fetch category info for this category
    useEffect(() => {
        loadCategory();
    }, []);

    const loadCategory =  async () => {
        await fetch(`https://brew-review-backend.herokuapp.com/category/${slug.slug}`)
        .then(responce => responce.json())
        .then(receivedData => setCategory(receivedData));
    }
    console.log(category)


    return (
        <div className="page-container">

            <section class="py-4 my-5">
                <div class="container ">
                    <div class="row">
                        <div class="col-12">
                            <h2 class="mb-3 col-12">Beverages by <CategoryList category={category}></CategoryList></h2>


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