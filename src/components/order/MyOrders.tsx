import theme from 'assets/style/theme';
import Button from 'components/common/Button';
import { OrderContext } from 'contexts/OrderContext';
import { useContext, useState } from 'react';
import styled from 'styled-components';
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

const BottomArea = styled.div`
    display: flex;
    flex-direction: column;
`;

const FlexBox = styled.div`
    display: flex;
    justify-content: space-between;
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

function MyOrders() {
    const context = useContext(OrderContext);

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);

    return (
        <Container>
            <h3>My Orders</h3>
            <Address>
                <p>주소</p>
                <h5>서울시 강서구 강서로 123길 45</h5>
                <h5>사이다아파트 607호</h5>
            </Address>
            <OrderView>
                <OrderItem />
            </OrderView>
            <BottomArea>
                <FlexBox>
                    <div className="text">주문금액</div>
                    <span>{totalPrice}원</span>
                </FlexBox>
                <FlexBox>
                    <div className="text">총 수량</div>
                    <span>{totalQuantity}개</span>
                </FlexBox>
                <Button color="yellow" size="wide">
                    주문하기
                </Button>
            </BottomArea>
        </Container>
    );
}

export default MyOrders;
