import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import ParentCategoryTable from '../../components/ParentCategory/ParentCategoryTable';


function ParentCategory({ setParentCategoryToEdit }) {
    const [parentCategory, setParentCategory] = useState([]);
    let navigate = useNavigate();

    //useEffect calls loadBeverage() to get the Beverage data asyncronously.
    useEffect(() => {
        loadParentCategory();
    }, []);

    const loadParentCategory = async () => {
        await fetch('https://brew-review-backend.herokuapp.com/parent-category/')
            .then(responce => responce.json())
            .then(receivedData => setParentCategory(receivedData));
    }
    console.log(parentCategory)

    const onEdit = parentCategoryToEdit => {
        const parentCategoryEditLink = "/edit-parent-category";
        setParentCategoryToEdit(parentCategoryToEdit);
        navigate(parentCategoryEditLink);
    }
    return (
        <section class="py-4 my-5">
            <div class="container ">
                <div class="row">
                    <div class="col-10">
                        <div className="page-container">
                            <h1 class="h1">Parent categories(types)</h1>
                            <Link to="../add-parent-category">
                                <button class="btn btn-success">New Parent Category</button>
                            </Link>

                            <ul >
                                <ParentCategoryTable parentCategory={parentCategory} onEdit={onEdit}></ParentCategoryTable>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ParentCategory;