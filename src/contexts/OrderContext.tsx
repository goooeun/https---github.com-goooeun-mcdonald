import React, { createContext, useRef, useState } from 'react';
import IOrder from 'types/Order';

type OrderContextType = {
    orders: IOrder[];
    addOrder: (orders: IOrder) => void;
    changeOrder: (orders: IOrder) => void;
    cancelOrder: (id: number) => void;
};

const OrderContext = createContext<OrderContextType>({
    orders: [],
    addOrder: () => {},
    changeOrder: () => {},
    cancelOrder: () => {},
});

const OrderProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [orders, setOrders] = useState<IOrder[]>([]);
    const nextId = useRef(0);

    const addOrder = (order: IOrder) => {
        setOrders(orders.concat({ ...order, id: nextId.current }));
        nextId.current += 1;
    };

    const cancelOrder = (id: number) => {
        setOrders(orders.filter((item) => item.id !== id));
    };

    const changeOrder = (order: IOrder) => {
        setOrders(
            orders.map((item) =>
                item.id === order.id
                    ? { ...order, combo: order.combo, quantity: order.quantity }
                    : item
            )
        );
    };

    return (
        <OrderContext.Provider
            value={{ orders, addOrder, cancelOrder, changeOrder }}
        >
            {children}
        </OrderContext.Provider>
    );
};

export { OrderContext, OrderProvider };
