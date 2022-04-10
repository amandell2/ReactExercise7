import {useContext, useState } from "react";
import OrderContext from "../context/OrderContext";
import { Item } from "../model/Item";

interface Props{
    item: Item;
}

export function MenuItem({item}: Props){
   const {order, addItem, removeItem} = useContext(OrderContext);
  
   const [showRemove, setShowRemove] = useState(false);


    return(
        <div>
            <ul>
                <li>
                    <p>Name: {item.name}</p>
                    <p>Description: {item.description}</p>
                    <p>Calories: {item.calories}</p>
                    <p>Price: {item.price}</p>
                    {item.vegetarian ? <p>Vegetarian</p> : <p>Not Vegetarian</p>}
                    <button onClick={()=>{addItem(item); setShowRemove(true)}}>Add to Order</button> 
                    {
                    showRemove && 
                    <button onClick={()=>
                        {removeItem(item.id); 
                            {order.includes(item) ? setShowRemove(true) : setShowRemove(false)}
                    }}>
                        Remove from Order</button>
                    }
                    
                </li>
            </ul>
        </div>
    )
}