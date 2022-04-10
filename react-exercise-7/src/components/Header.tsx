import './Header.css';
import { useContext } from "react";
import OrderContext from "../context/OrderContext";

import { MenuItem } from "./MenuItem";

export default function Header(){
    const {order, addItem, removeItem} = useContext(OrderContext);
   

    return(
        <div className= 'Header__container'>
            <h1>Sunny Side Up</h1>
            <p>Order Count: </p>
        </div>
    )
}