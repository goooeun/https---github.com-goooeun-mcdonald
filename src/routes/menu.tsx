import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import database from '../firebase';
import IMenu from 'types/Menu';
import MenuList from 'components/menu/MenuList';

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

    return <MenuList menu={menu} />;
}

export default Menu;
