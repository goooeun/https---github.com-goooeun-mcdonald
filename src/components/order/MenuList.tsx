import styled from 'styled-components';
import IMenu from 'types/Menu';
import MenuItem from './MenuItem';

type MenuListProps = {
    list: IMenu[];
    filter: String;
};

const ItemList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

function MenuList({ list, filter }: MenuListProps) {
    const menuList =
        filter != '' ? list.filter((item) => item.type === filter) : list;
    return (
        <ItemList>
            {menuList &&
                menuList.map((item) => {
                    return <MenuItem key={item.id} item={item} />;
                })}
        </ItemList>
    );
}

export default MenuList;
