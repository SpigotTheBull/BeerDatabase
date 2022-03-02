import React from "react";
import { Link } from "react-router-dom";
//This componet is used on the home page for the beverage cards

function Category ({category}) {
    return (

        <div>
            {category.Type} - {category.Name}
        </div>
    )
}

export default Category;