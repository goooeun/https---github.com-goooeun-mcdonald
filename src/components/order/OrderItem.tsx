import styled from 'styled-components';
import {
    RiCloseCircleFill,
    RiAddCircleLine,
    RiIndeterminateCircleLine,
} from 'react-icons/ri';
import theme from 'assets/style/theme';
import { useEffect, useRef, useState } from 'react';
import RadioButton from 'components/common/RadioButton';
import RadioBox from 'components/common/RadioBox';
import IOrder from 'types/Order';
import useOrderContext from 'utils/hooks/useOrderContext';

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
        width: 45px;
        font-size: 14px;
        font-weight: 700;
    }
    .green {
        color: ${theme.colors.green};
        .price {
            display: inline-block;
            text-align: right;
        }
    }
`;

const QuantityCounter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
    button {
        width: 20px;
        height: 20px;
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        background-color: transparent;
        &:hover {
            color: ${theme.colors.green};
        }
        &:disabled {
            cursor: default;
            &:hover {
                color: rgba(16, 16, 16, 0.3);
                opacity: 1;
            }
        }
    }
`;

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

type OrderItemProps = {
    item: IOrder;
};

function OrderItem({ item }: OrderItemProps) {
    const context = useOrderContext();
    const { menu } = item;

    const changeComboType = (type: string) => {
        // setPrice(type === 'single' ? 6900 : 10200);
    };

    const changeQuantity = (count: number) => {
        const order = { ...item, quantity: item.quantity + count };
        context.changeOrder(order);
    };

    return (
        <Block>
            <LeftArea>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/burger/${menu.img}`}
                />
                <p>{menu.name}</p>
                <span>{menu.nameEn}</span>
            </LeftArea>
            <RightArea>
                <FlexBox>
                    <div>가격</div>
                    <div className="green">
                        <div className="price">
                            {item.combo ? menu.comboPrice : menu.price}
                        </div>
                        원
                    </div>
                </FlexBox>
                <FlexBox>
                    <div>수량</div>
                    <QuantityCounter>
                        <button
                            onClick={() => changeQuantity(-1)}
                            disabled={item.quantity > 1 ? false : true}
                        >
                            <RiIndeterminateCircleLine />
                        </button>

                        {item.quantity}
                        <button
                            onClick={() => changeQuantity(1)}
                            disabled={item.quantity < 10 ? false : true}
                        >
                            <RiAddCircleLine />
                        </button>
                    </QuantityCounter>
                </FlexBox>
                <RadioBox>
                    <RadioButton
                        label="단품"
                        name={`menuType${item.id}`}
                        id="single"
                        value="false"
                        onChange={() => changeComboType('single')}
                        isChecked={true}
                    />
                    <RadioButton
                        label="세트"
                        name={`menuType${item.id}`}
                        id="combo"
                        value="true"
                        onChange={() => changeComboType('combo')}
                        isChecked={false}
                    />
                </RadioBox>
            </RightArea>
            <CancelButton>
                <RiCloseCircleFill />
            </CancelButton>
        </Block>
    );
}

export default OrderItem;
