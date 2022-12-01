import styled from 'styled-components';
import { RiCloseCircleFill } from 'react-icons/ri';
import theme from 'assets/style/theme';
import { useEffect, useState } from 'react';

const Block = styled.div`
    width: 100%;
    height: 170px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    display: flex;
    position: relative;
    background-color: #fff;
    border-radius: 8px;
    padding: 16px 20px;
    margin-bottom: 16px;
`;

const LeftArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        width: 100px;
    }
    p {
        font-size: 14px;
        font-weight: 700;
        color: ${theme.colors.black};
    }
    span {
        font-size: 12px;
        color: ${theme.colors.gray};
    }
`;

const RightArea = styled.div`
    width: 100%;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}`;

const FlexBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    div:first-child {
        font-size: 14px;
        font-weight: 700;
    }
    .green {
        color: ${theme.colors.green};
    }
`;

const QuantityCounter = styled.div``;

const CancelButton = styled.button`
    width: 24px;
    height: 24px;
    font-size: 24px;
    border: none;
    color: ${theme.colors.red};
    position: absolute;
    right: 8px;
    top: 12px;
    background-color: transparent;
`;

function OrderItem() {
    const [quantity, setQuantity] = useState(0);
    useEffect(() => {
        if (quantity < 0) {
            setQuantity(0);
        }
        if (quantity > 10) {
            setQuantity(10);
            alert('최대 수량은 10개입니다.');
        }
    }, [quantity]);

    return (
        <Block>
            <LeftArea>
                <img src={`${process.env.PUBLIC_URL}/assets/burger/001.png`} />
                <p>베이컨토마토디럭스</p>
                <span>Bacon Tomato Deluxe</span>
            </LeftArea>
            <RightArea>
                <FlexBox>
                    <div>가격</div>
                    <div className="green">6,900원</div>
                </FlexBox>
                <FlexBox>
                    <div>수량</div>
                    <QuantityCounter>
                        <button onClick={() => setQuantity(quantity - 1)}>
                            -
                        </button>{' '}
                        {quantity}{' '}
                        <button onClick={() => setQuantity(quantity + 1)}>
                            +
                        </button>
                    </QuantityCounter>
                </FlexBox>
                <FlexBox>단품 세트</FlexBox>
            </RightArea>
            <CancelButton>
                <RiCloseCircleFill />
            </CancelButton>
        </Block>
    );
}

export default OrderItem;
