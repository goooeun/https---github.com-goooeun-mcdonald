import { useEffect, useState } from 'react';
import IMenu from 'types/Menu';
import MenuList from 'components/menu/MenuList';
import axios from 'axios';
import getFetchData from 'utils/getFetchData';
import IFetchData from 'types/FetchData';

function Menu() {
    const [menu, setMenu] = useState<IMenu[]>([]);
    const { fetchData } = getFetchData();

    async function getMenus() {
        try {
            const data = await fetchData('/menus');
            setMenu(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        (async function (page, storeKeyword) {
            await getMenus();
        })();
    }, []);

    return <MenuList menu={menu} />;
}

export default Menu;
