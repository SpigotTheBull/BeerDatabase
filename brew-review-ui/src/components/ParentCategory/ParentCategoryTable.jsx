import React from "react";
import ParentCategoryTableRow from "./ParentCategoryTableRow";

function ParentCategoryTable({ parentCategory }) {
    return (
        <>
            {parentCategory.map((parentCategory, i) => <ParentCategoryTableRow parentCategory={parentCategory}
                    key={i} />)}

        </>
    );
}

export default ParentCategoryTable;