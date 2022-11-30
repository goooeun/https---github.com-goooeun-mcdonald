import styled from 'styled-components';
import theme from 'assets/style/theme';
import { Link } from 'react-router-dom';

function MenuItem() {
    const MenuItemBlock = styled.div`
        width: calc((100% - 88px) / 5);
        @media screen and (max-width: 1200px) {
            width: calc((100% - 66px) / 4);
        }
        border-radius: 16px;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
        a {
            height: 230px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
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

    return (
        <MenuItemBlock>
            <Link to="/menu/001">
                <ImgWrapper>
                    <Img
                        src={`${process.env.PUBLIC_URL}/assets/burger/001.png`}
                    />
                </ImgWrapper>
                <h3>베이컨토마토디럭스</h3>
                <h5>Bacon Tomato deluxe</h5>
            </Link>
        </MenuItemBlock>
    );
}

export default MenuItem;
