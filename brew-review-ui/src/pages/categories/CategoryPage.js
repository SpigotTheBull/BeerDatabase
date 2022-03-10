import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import CategoryTable from '../../components/category/CategoryTable';

function Category() {
    const [category, setCategory] = useState([]);

    //useEffect calls loadBeverage() to get the Beverage data asyncronously.
    useEffect(() => {
        loadCategory();
    }, []);

    const loadCategory = async () => {
        await fetch('https://brew-review-backend.herokuapp.com/category/')
            .then(responce => responce.json())
            .then(receivedData => setCategory(receivedData));
    }
    console.log(category)

    return (
        <section class="py-4 my-5">
            <div class="container ">
                <div class="row">
                    <div class="col-10">
                        <div className="page-container">
                            <h1 class="h1">Categories</h1>
                            <Link to="../add-category">
                                <button class="btn btn-success">New Category</button>
                            </Link>
                                <CategoryTable category={category}></CategoryTable>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category;