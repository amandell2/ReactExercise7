import {useContext, useState } from "react";
import OrderContext from "../context/OrderContext";
import { Item } from "../model/Item";
import "./MenuItem.css";

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
                    <p>Price: ${(item.price).toFixed(2)}</p>
                    {item.vegetarian ? <p>Vegetarian</p> : <p>Not Vegetarian</p>}
                    <button onClick={()=>addItem(item)}>Add to Order</button> 
                    {
                    order.some((currentItem)=>currentItem.id === item.id) && 
                    <button className="MenuItem__removeBtn"onClick={()=>removeItem(item.id)}>
                        Remove from Order</button>
                    }
                    
                </li>
            </ul>
        </div>
    )
}