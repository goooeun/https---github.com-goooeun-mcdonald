import styled from 'styled-components';
import MenuItem from './MenuItem';

function MenuList() {
    const MenuItems = styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    `;

    return (
        <MenuItems>
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
        </MenuItems>
    );
}

export default MenuList;
