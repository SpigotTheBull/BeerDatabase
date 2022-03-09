import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

import TagTable from '../../components/Tag/TagTable';

function Tags({setTagToEdit}) {
    const [tag, setTag] = useState([]);
    let navigate = useNavigate();

    //useEffect calls loadBeverage() to get the Beverage data asyncronously.
    useEffect(() => {
        loadTag();
    }, []);

    const loadTag = async () => {
        await fetch('https://brew-review-backend.herokuapp.com/tag/')
            .then(responce => responce.json())
            .then(receivedData => setTag(receivedData));
    }
    console.log(tag)


    const onEdit = tagToEdit =>{
        const tagEditLink = "/edit-tag/";
        setTagToEdit(tagToEdit);        
        navigate(tagEditLink);
    }
    return (
        <section class="py-4 my-5">
            <div class="container ">
                <div class="row">
                    <div class="col-10">
                        <div className="page-container">
                            <h1 class="h1">To do: Populate this page with tags</h1>
                            <h2 class="h2">Tag name</h2>
                            <Link to="../add-tag">
                                <button class="btn btn-success">New Tag</button>
                            </Link>
                            <table class="table">
                                <tr>
                                    <th>Name</th>
                                    <th></th>
                                </tr>
                                <TagTable tag={tag} onEdit={onEdit}></TagTable>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Tags;