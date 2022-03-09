import React from "react";
import Beverage from "./Beverage";

function BeverageList({ beverage, onDelete, onEdit }) {
    return (
        <>
            {beverage.map((beverage, i) => <Beverage beverage={beverage}
                    onDelete={onDelete}
                    onEdit={onEdit}
                    key={i} />)}

        </>
    );
}

export default BeverageList;