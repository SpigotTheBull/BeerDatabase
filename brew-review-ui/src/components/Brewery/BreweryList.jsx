import React from "react";
import Brewery from "./Brewery";

function BreweryList({ brewery, onDelete, onEdit }) {
    return (
        <>
            {brewery.map((brewery, i) => <Brewery brewery={brewery}
                onDelete={onDelete}
                onEdit={onEdit}
                key={i} />)}

        </>
    );
}

export default BreweryList;