import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function TagListPage() {

    return (
        <section class="py-4 my-5">
            <div class="container ">
                <div class="row">
                    <div class="col-10">
                        <div className="page-container">
                            <h1 class="h1">List of tags</h1>       
                            <p>Wouldn't it be neat if this was a tag 
                                cloud scaling the size of each tag by the number of uses. Not sure if we'll be able to add that in this class.</p>             
                            <ul>
                                {/**TODO seporate these into individual links to each tag */}
                                <Link to="../tag-detail">
                                <li>Hoppy</li>
                                <li>Bitter</li>
                                <li>Sweat</li>
                                </Link>
                            </ul>
                            


                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TagListPage;