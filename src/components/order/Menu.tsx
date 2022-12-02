import theme from 'assets/style/theme';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import IMenu from 'types/Menu';
import MenuList from './MenuList';
import { collection, getDocs } from 'firebase/firestore';
import database from '../../firebase';

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

function Menu() {
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
            <MenuList list={menu} filter={menuFilter} />
        </Container>
    );
}

export default Menu;
