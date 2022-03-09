import React from "react";
import TagTableRow from "./TagTableRow";

function TagTable({ tag,  onDelete, onEdit }) {
    return (
        <>
            {tag.map((tag, i) => <TagTableRow tag={tag}
                    onDelete={onDelete}
                    onEdit={onEdit}
                    key={i} />)}

        </>
    );
}

export default TagTable;