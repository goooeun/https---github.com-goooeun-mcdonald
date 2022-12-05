import Menu from 'components/order/Menu';
import MyOrders from 'components/order/MyOrders';
import { OrderProvider } from 'contexts/OrderContext';

function Order() {
    return (
        <OrderProvider>
            <Menu />
            <MyOrders />
        </OrderProvider>
    );
}

export default Order;
