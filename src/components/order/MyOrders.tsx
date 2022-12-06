import theme from 'assets/style/theme';
import Button from 'components/common/Button';
import FlexBox from 'components/common/FlexBox';
import { useMemo, useState } from 'react';
import styled from 'styled-components';
import IOrder from 'types/Order';
import useOrderContext from 'utils/hooks/useOrderContext';
import OrderItem from './OrderItem';

const Container = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 360px;
    height: 100%;
    background-color: #f9f9f9;
    border-radius: 0 8px 8px 0;
    padding: 50px 20px;
    display: flex;
    flex-direction: column;
`;

const Address = styled.div`
    margin: 24px 0;
    p {
        font-size: 12px;
        font-weight: 700;
        margin-bottom: 8px;
        color: ${theme.colors.black};
    }
    h5 {
        font-weight: 400;
        color: ${theme.colors.black};
    }
`;

const OrderView = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 3px;
    overflow-y: scroll;
    flex-grow: 1;
`;

const Wrapper = styled(FlexBox)`
    width: 100%;
    margin-bottom: 8px;

    .text {
        font-size: 16px;
        font-weight: 700;
    }
    span {
        color: ${theme.colors.green};
        font-weight: 700;
        font-size: 18px;
    }
`;

function countTotalValue(orders: IOrder[]) {
    let totalQuantity = 0;
    const totalPrice = orders
        .map((order) => {
            const { menu } = order;
            const comboPrice =
                menu.comboPrice === undefined ? menu.price : menu.comboPrice;
            const menuPrice = order.combo ? comboPrice : menu.price;

            totalQuantity += order.quantity;

            return order.quantity * menuPrice;
        })
        .reduce((acc, cur) => acc + cur, 0);

    return { totalPrice, totalQuantity };
}

function MyOrders() {
    const context = useOrderContext();

    const orders = context.orders;

    const { totalPrice, totalQuantity } = useMemo(
        () => countTotalValue(orders),
        [orders]
    );

    return (
        <Container>
            <h3>My Orders</h3>
            <Address>
                <p>주소</p>
                <h5>서울시 강서구 강서로 123길 45</h5>
                <h5>사이다아파트 607호</h5>
            </Address>
            <OrderView>
                {orders &&
                    orders.map((order) => {
                        return <OrderItem key={order.id} item={order} />;
                    })}
            </OrderView>
            <FlexBox direction="column" alignItems="flex-start">
                <Wrapper justifyContent="space-between">
                    <div className="text">주문금액</div>
                    <span>{totalPrice.toLocaleString()} 원</span>
                </Wrapper>
                <Wrapper justifyContent="space-between">
                    <div className="text">총 수량</div>
                    <span>{totalQuantity.toLocaleString()} 개</span>
                </Wrapper>
                <Button color="yellow" size="wide">
                    주문하기
                </Button>
            </FlexBox>
        </Container>
    );
}

export default MyOrders;
