import React from "react";
import CategoryTableRow from "./CategoryTableRow";

function CategoryTable({ category,  onDelete, onEdit  }) {
    return (
        <>
            {category.map((category, i) => <CategoryTableRow category={category}
                onEdit={onEdit}
                onDelete={onDelete}
                key={i} />)}

        </>
    );
}

export default CategoryTable;