import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import database from '../firebase';
import Menu from 'components/order/Menu';
import MyOrders from 'components/order/MyOrders';
import { OrderProvider } from 'contexts/OrderContext';
import IMenu from 'types/Menu';

function Order() {
    const [menu, setMenu] = useState<IMenu[]>([]);
    useEffect(() => {
        async function getMenu() {
            const menuCollection = collection(database, 'menu');
            const snapshot = await getDocs(menuCollection);
            const data: IMenu[] = snapshot.docs.map(
                (doc) => doc.data() as IMenu
            );
            setMenu(data);
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
