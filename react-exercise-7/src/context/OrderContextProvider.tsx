import { ReactNode, useState } from "react";
import { Item } from "../model/Item";
import OrderContext from "./OrderContext";

interface Props {children: ReactNode;}

export default function OrderContextProvider({children}: Props){
    const [order, setOrder] = useState<Item[]>([]);

    function addItem(item: Item): void{
        setOrder(prev => [...prev, item]);
    }

    function removeItem(id: string): void {
        const index = order.findIndex(item => item.id === id);
        setOrder(prev => [...prev.slice(0, index), ...prev.slice(index + 1)]);
    }

    return(
        <OrderContext.Provider value = {{order, addItem, removeItem}}>
            {children}
        </OrderContext.Provider>
    );
};