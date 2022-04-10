import { useContext } from "react";
import OrderContext from "../context/OrderContext";
import { MenuItem } from "./MenuItem";


export default function Sidebar(){
    const {order, addItem, removeItem} = useContext(OrderContext);
     
    return(
    <div>
        <ol>
        {order.map((item, i) => <li>{item.name} -${item.price}</li> )}
        </ol>
        <p>Total Cost: </p>
    </div>
)
}