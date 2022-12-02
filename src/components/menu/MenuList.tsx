import styled from 'styled-components';
import MenuItem from './MenuItem';
import { useEffect, useState } from 'react';
import IMenu from 'types/Menu';
import { collection, getDocs } from 'firebase/firestore';
import database from '../../firebase';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`;

function MenuList() {
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

    return (
        <Wrapper>
            {menu &&
                menu.map((item) => {
                    return <MenuItem key={item.id} item={item} />;
                })}
        </Wrapper>
    );
}

export default MenuList;
