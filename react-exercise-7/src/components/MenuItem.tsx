import { FormEvent, useContext, useState } from "react";
import OrderContext from "../context/OrderContext";
import { Item } from "../model/Item";

interface Props{
    item: Item;
}

export function MenuItem({item}: Props){
   const [count, setCount] = useState(0);
  
    function handleAdd(){
        let orderCount = count + 1;
        setCount(orderCount);
        console.log(`Order Count is: ${orderCount}`)
        //addItem(item);
    };

    function handleRemove(){
        let orderCount = count - 1;
        setCount(orderCount);
        console.log(`Order Count is: ${orderCount}`)
    };

    return(
        <div>
            <ul>
                <li>
                    <p>Name: {item.name}</p>
                    <p>Description: {item.description}</p>
                    <p>Calories: {item.calories}</p>
                    <p>Price: {item.price}</p>
                    {item.vegetarian ? <p>Vegetarian</p> : <p>Not Vegetarian</p>}
                    <button onClick={()=>handleAdd()}>Add to Order</button> 
                    <button onClick={()=>handleRemove()}>Remove from Order</button>
                </li>
            </ul>
        </div>
    )
}