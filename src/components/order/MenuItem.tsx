import styled from 'styled-components';
import { FiShoppingBag } from 'react-icons/fi';
import theme from 'assets/style/theme';
import IMenu from 'types/Menu';

const Item = styled.div`
    width: calc(100% / 2 - 8px);
    padding: 24px;
    position: relative;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    margin-bottom: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
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

const AddButton = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${theme.colors.yellow};
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
                    <span>단품 {item.price}원</span>
                    {item.comboPrice && <span>세트 {item.comboPrice}원</span>}
                </Price>
                <AddButton>
                    <FiShoppingBag />
                </AddButton>
            </div>
        </Item>
    );
}

export default MenuItem;
