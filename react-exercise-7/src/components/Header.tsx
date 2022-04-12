import './Header.css';
import { useContext } from "react";
import OrderContext from "../context/OrderContext";


export default function Header(){
    const {order} = useContext(OrderContext);
   

    return(
        <div className= 'Header__container'>
            <h1>Sunny Side Up</h1>
            <p>Order Count: {order.length} </p>
        </div>
    )
}