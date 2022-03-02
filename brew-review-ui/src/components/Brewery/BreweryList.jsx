import React from "react";
import Brewery from "./Brewery";

function BreweryList({ brewery }) {
    return (
        <>
            {brewery.map((brewery, i) => <Brewery brewery={brewery}
                    key={i} />)}

        </>
    );
}

export default BreweryList;