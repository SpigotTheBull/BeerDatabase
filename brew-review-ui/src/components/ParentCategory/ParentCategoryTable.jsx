import React from "react";
import ParentCategoryTableRow from "./ParentCategoryTableRow";

function ParentCategoryTable({ parentCategory,  onDelete, onEdit }) {
    return (
        <>
            {parentCategory.map((parentCategory, i) => <ParentCategoryTableRow parentCategory={parentCategory}
                    onEdit={onEdit}
                    onDelete={onDelete}
                    key={i}                
                    />)}

        </>
    );
}

export default ParentCategoryTable;