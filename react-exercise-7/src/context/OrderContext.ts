import { createContext } from "react";
import { Item } from "../model/Item";

interface OrderContextModel{
    order: Item[];
    addItem: (item: Item) => void;
    removeItem: (id: string) => void;
}

const defaultValue: OrderContextModel = {
    order: [],
    addItem: () => {},
    removeItem: () => {}
};

const OrderContext = createContext(defaultValue);

export default OrderContext;