import styled from 'styled-components';
import theme from 'assets/style/theme';
import { Link } from 'react-router-dom';
import IMenu from 'types/Menu';

const Wrapper = styled.div`
    width: calc((100% - 88px) / 5);
    @media screen and (max-width: 1200px) {
        width: calc((100% - 66px) / 4);
    }
    height: 230px;
    border-radius: 16px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: 100%;
    }
    &:hover {
        border: 1px solid ${theme.colors.yellow};
    }
    position: relative;
    &::before {
        content: '';
        width: 80px;
        height: 80px;
        position: absolute;
        top: 30px;
        left: 30px;
        border-radius: 50%;
        background-color: ${theme.colors.lightGray};
    }
`;

const ImgWrapper = styled.div`
    width: calc(100% - 32px);
    height: 55%;
    position: relative;
`;

const Img = styled.img`
    width: 170px;
`;

type MenuType = {
    item: IMenu;
};

function MenuItem({ item }: MenuType) {
    return (
        <Wrapper>
            <Link to={`/menu/${item._id}`}>
                <ImgWrapper>
                    <Img
                        src={`${process.env.PUBLIC_URL}/assets/images/${item.type}/${item.img}`}
                    />
                </ImgWrapper>
                <h3>{item.name}</h3>
                <h5>{item.nameEn}</h5>
            </Link>
        </Wrapper>
    );
}

export default MenuItem;
