import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import TagEdit from '../../components/Tag/TagEdit';

export const EditTag = ({tagToEdit}) => {

    return (
        <>
            <section class="py-4 my-5">
                <div class="container ">
                    <div class="col-md">
                        <TagEdit tagToEdit={tagToEdit}/>
                    </div>
                </div>
            </section>
        </>
    );
}

export default EditTag;