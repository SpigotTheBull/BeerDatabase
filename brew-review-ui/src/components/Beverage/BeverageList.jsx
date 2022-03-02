import React from "react";
import Beverage from "./Beverage";

function BeverageList({ beverage }) {
    return (
        <>
            {
                beverage.map((beverage, i) => <Beverage beverage={beverage}
                    key={i} />)
            }

        </>
    );

}

export default BeverageList;