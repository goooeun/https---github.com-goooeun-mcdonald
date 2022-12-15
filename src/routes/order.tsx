import { useEffect, useState } from 'react';
import Menu from 'components/order/Menu';
import MyOrders from 'components/order/MyOrders';
import { OrderProvider } from 'contexts/OrderContext';
import IMenu from 'types/Menu';
import axios from 'axios';

function Order() {
    const [menu, setMenu] = useState<IMenu[]>([]);
    useEffect(() => {
        async function getMenu() {
            const serverURI = 'http://localhost:3001';
            try {
                const fetchData = await axios.get(serverURI + '/menus');
                setMenu(fetchData.data);
            } catch (error) {
                console.error(error);
            }
        }
        getMenu();
    }, []);

    return (
        <OrderProvider>
            <Menu menu={menu} />
            <MyOrders />
        </OrderProvider>
    );
}

export default Order;
