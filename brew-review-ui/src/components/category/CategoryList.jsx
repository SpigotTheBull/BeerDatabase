import React from "react";
import Category from "./Category";

function CategoryList({ category }) {
    return (
        <>
            {category.map((category, i) => <Category category={category}
                    key={i} />)}

        </>
    );
}

export default CategoryList;