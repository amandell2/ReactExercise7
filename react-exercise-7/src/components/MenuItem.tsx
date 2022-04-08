import { useContext } from "react";
import OrderContext from "../context/OrderContext";
import { Item } from "../model/Item";

interface Props{
    item: Item;
}

export function MenuItem({item}: Props){
   
    return(
        <div>
            <ul>
                <li>
                    <p>Name: {item.name}</p>
                    <p>Description: {item.description}</p>
                    <p>Calories: {item.calories}</p>
                    <p>Price: {item.price}</p>
                    {item.vegetarian ? <p>Vegetarian</p> : <p>Not Vegetarian</p>}
                    <button>Add to Order</button> 
                    <button>Remove from Order</button>
                </li>
            </ul>
        </div>
    )
}