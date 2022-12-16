import { useEffect, useState } from 'react';
import Menu from 'components/order/Menu';
import MyOrders from 'components/order/MyOrders';
import { OrderProvider } from 'contexts/OrderContext';
import IMenu from 'types/Menu';
import styled, { keyframes } from 'styled-components';
import getFetchData from 'utils/getFetchData';
import theme from 'assets/style/theme';
import { FaHamburger } from 'react-icons/fa';

const colorAnimation = keyframes`
    0% {
        color: ${theme.colors.red};
        transform: translateY(3px);
    }
    25% {
        color: ${theme.colors.yellow};
        transform: translateY(0);
    }
    50% {
        color: ${theme.colors.green};
        transform: translateY(3px);
    }
    75% {
        color: ${theme.colors.yellow};
        transform: translateY(0);
    }
    100% {
        color: ${theme.colors.red};
        transform: translateY(3px);
    }
`;

const Loading = styled.div`
    width: calc(100% - 360px);
    border-radius: 10px;
    height: 100%;
    background-color: ${theme.colors.lightGray};
    position: relative;
    svg {
        position: absolute;
        left: calc(50% - 30px);
        top: calc(50% - 30px);
        width: 60px;
        height: 60px;
        animation: ${colorAnimation} 2s infinite;
    }
`;

function Order() {
    const [menu, setMenu] = useState<IMenu[]>([]);
    const { fetchData } = getFetchData();
    const [isLoading, setIsLoading] = useState(true);

    async function getMenu() {
        try {
            const data = await fetchData('/menus');
            setMenu(data);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        (async function () {
            getMenu();
        })();
    }, []);

    return (
        <OrderProvider>
            {isLoading ? (
                <Loading>
                    <FaHamburger />
                </Loading>
            ) : (
                <Menu menu={menu} />
            )}
            <MyOrders />
        </OrderProvider>
    );
}

export default Order;
