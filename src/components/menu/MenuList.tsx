import styled from 'styled-components';
import MenuItem from './MenuItem';
import IMenu from 'types/Menu';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`;

type MenuListType = {
    menu: IMenu[];
};

function MenuList({ menu }: MenuListType) {
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
