import { useContext } from "react";
import OrderContext from "../context/OrderContext";
import "./Sidebar.css";


export default function Sidebar(){
    const {order} = useContext(OrderContext);
     
    return(
    <div className="Sidebar__container">
        <ol>
        {order.map((item, i) => <li>{item.name} -${(item.price).toFixed(2)}</li> )}
        </ol>
        <p>Total Cost: ${(order.reduce((total, currentValue) => total = total + currentValue.price,0)).toFixed(2)} </p>
    </div>
)
}