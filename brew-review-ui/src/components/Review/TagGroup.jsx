import React from "react";

function TagGroup({ tags }) {
    console.log(tags)
    return (
        <>
            {tags.map((tags, i) => <Tag tag={tags}
                    key={i} />)}
        </>
    );
}

function Tag({ tag }) {
    return (
        <>
        {tag.Tags}, {/** This makes the space show up */} 
        </>
    )
}

export default TagGroup;