import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import TagAdd from '../../components/Tag/TagAdd';

function AddTag() {
    const history = useNavigate();

    return (
        <>
            <section class="py-4 my-5">
                <div class="container ">
                    <div class="col-md col-8">
                        <TagAdd />
                    </div>
                </div>
            </section>
        </>
    );
}

export default AddTag;