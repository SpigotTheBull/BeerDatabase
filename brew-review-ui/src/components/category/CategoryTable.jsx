import React from "react";
import CategoryTableRow from "./CategoryTableRow";

function CategoryTable({ category }) {
    return (
        <>
            {category.map((category, i) => <CategoryTableRow category={category}
                    key={i} />)}

        </>
    );
}

export default CategoryTable;