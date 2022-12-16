import styled, { keyframes } from 'styled-components';
import MenuItem from './MenuItem';
import IMenu from 'types/Menu';
import theme from 'assets/style/theme';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 3px;
`;

const loading = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0.5;
    }
`;

const Skelton = styled.div`
    width: calc((100% - 88px) / 5);
    @media screen and (max-width: 1200px) {
        width: calc((100% - 66px) / 4);
    }
    height: 230px;
    border-radius: 16px;
    position: relative;
    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 16px;
        background-color: ${theme.colors.lightGray};
        opacity: 1;
        animation: ${loading} 1.3s infinite;
    }
`;

type MenuListType = {
    menu: IMenu[];
    isLoading: boolean;
};

function MenuList({ menu, isLoading }: MenuListType) {
    return (
        <Wrapper>
            {isLoading
                ? new Array(10).fill(1).map((_, i) => {
                      return <Skelton key={i} />;
                  })
                : menu.map((item) => {
                      return <MenuItem key={item._id} item={item} />;
                  })}
        </Wrapper>
    );
}

export default MenuList;
