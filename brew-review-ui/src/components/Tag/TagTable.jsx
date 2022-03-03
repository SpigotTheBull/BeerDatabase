import React from "react";
import TagTableRow from "./TagTableRow";

function TagTable({ tag }) {
    return (
        <>
            {tag.map((tag, i) => <TagTableRow tag={tag}
                    key={i} />)}

        </>
    );
}

export default TagTable;