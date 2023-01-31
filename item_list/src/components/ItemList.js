import React, { useState } from "react";
import Item from "./Item";

const ItemList = () => {
    const itemDataArr = [
        {
            name: "CPU",
            price: 480000,
            quantity: 1
        },
        {
            name: "GPU",
            price: 3320000,
            quantity: 1
        },
        {
            name: "FPGA",
            price: 6785000,
            quantity: 1
        },
    ]

    const [items] = useState(itemDataArr)

    return (
        <ul>
            { items.map((element) => (
                <Item key={element.name} item={element}/>
            ))}
        </ul>
    )
}

export default ItemList