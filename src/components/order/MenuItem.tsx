import styled from 'styled-components';
import { BsCart, BsCartCheckFill } from 'react-icons/bs';
import theme from 'assets/style/theme';
import IMenu from 'types/Menu';
import useOrderContext from 'utils/hooks/useOrderContext';
import { useMemo } from 'react';

const Item = styled.div`
    width: calc(100% / 2 - 8px);
    padding: 24px;
    position: relative;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    @media (max-width: 1300px) {
        flex-direction: column;
    }
`;
const Image = styled.img`
    width: 120px;
`;

const Price = styled.div`
    display: flex;
    flex-direction: column;
    color: ${theme.colors.green};
    font-size: 16px;
    font-weight: 700;
    margin-top: 16px;
`;

type OrderedProps = {
    isOrdered: boolean;
};

const AddButton = styled.button<OrderedProps>`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${(props) =>
        props.isOrdered ? theme.colors.green : theme.colors.yellow};
    color: #fff;
    font-size: 24px;
    border: none;
    position: absolute;
    bottom: 16px;
    right: 16px;
`;

type ItemProps = {
    item: IMenu;
};

function MenuItem({ item }: ItemProps) {
    const context = useOrderContext();

    const isOrdered = useMemo(() => {
        const isExist = context.orders.find(
            (order) => order.menu.id === item.id
        );
        return isExist === undefined ? false : true;
    }, [context.orders.length]);

    const addMenu = () => {
        context.addOrder({
            menu: item,
            combo: false,
            quantity: 1,
        });
    };

    return (
        <Item>
            <div>
                <Image
                    src={`${process.env.PUBLIC_URL}/assets/${item.type}/${item.img}`}
                />
            </div>
            <div>
                <h3>{item.name}</h3>
                <p>{item.nameEn}</p>
                <Price>
                    <span>단품 {item.price.toLocaleString()} 원</span>
                    {item.comboPrice && (
                        <span>세트 {item.comboPrice.toLocaleString()} 원</span>
                    )}
                </Price>
                <AddButton onClick={addMenu} isOrdered={isOrdered}>
                    {isOrdered ? <BsCartCheckFill /> : <BsCart />}
                </AddButton>
            </div>
        </Item>
    );
}

export default MenuItem;
