import { useEffect, useState } from 'react';
import IMenu from 'types/Menu';
import MenuList from 'components/menu/MenuList';
import getFetchData from 'utils/getFetchData';

function Menu() {
    const [menu, setMenu] = useState<IMenu[]>([]);
    const { fetchData } = getFetchData();
    const [isLoading, setIsLoading] = useState(true);

    async function getMenus() {
        try {
            const data = await fetchData('/menus');
            setMenu(data);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        (async function () {
            await getMenus();
        })();
    }, []);

    return <MenuList menu={menu} isLoading={isLoading} />;
}

export default Menu;
