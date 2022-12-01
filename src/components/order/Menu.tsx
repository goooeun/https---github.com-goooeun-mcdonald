import theme from 'assets/style/theme';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import IMenu from 'types/Menu';
import MenuList from './MenuList';

const Container = styled.div`
    width: calc(100% - 350px);
    height: 100%;
    border-radius: 8px;
    background-color: ${theme.colors.lightGray};
    padding: 20px;
    overflow-y: scroll;
`;

const Navigation = styled.div`
    display: flex;
    margin-bottom: 16px;
    button {
        background: none;
        border: none;
        outline: none;
        font-size: 20px;
        font-weight: 700;
        color: ${theme.colors.gray};
        margin-right: 16px;
        padding: 8px;
        cursor: pointer;
        &.active {
            color: ${theme.colors.red};
        }
    }
`;

const menuList: IMenu[] = [
    {
        id: 1,
        name: '베이컨토마토디럭스',
        nameEn: 'Bacon Tomato Deluxe',
        price: 6900,
        comboPrice: 10200,
        img: '001.png',
        type: 'burger',
        description:
            '베이컨토마토 디럭스 버거에 대한 설명. 이 버거는 굉장히 맛있습니다.',
    },
    {
        id: 2,
        name: '베이컨토마토디럭스',
        nameEn: 'Bacon Tomato Deluxe',
        price: 6900,
        comboPrice: 10200,
        img: '001.png',
        type: 'burger',
        description:
            '베이컨토마토 디럭스 버거에 대한 설명. 이 버거는 굉장히 맛있습니다.',
    },
    {
        id: 3,
        name: '코카-콜라 제로',
        nameEn: 'Coca-Cola Zero',
        price: 2000,
        img: '001.png',
        type: 'drink',
        description: '제로콜라에 대한 설명. 매우 맛있으나 칼로리는 제로입니다.',
    },
];

function Menu() {
    const [menuFilter, setMenuFilter] = useState('');

    return (
        <Container>
            <Navigation>
                <button
                    className={menuFilter === '' ? 'active' : ''}
                    onClick={() => setMenuFilter('')}
                >
                    All
                </button>
                <button
                    className={menuFilter === 'burger' ? 'active' : ''}
                    onClick={() => setMenuFilter('burger')}
                >
                    Burger
                </button>
                <button
                    className={menuFilter === 'drink' ? 'active' : ''}
                    onClick={() => setMenuFilter('drink')}
                >
                    Drink
                </button>
            </Navigation>
            <MenuList list={menuList} filter={menuFilter} />
        </Container>
    );
}

export default Menu;
