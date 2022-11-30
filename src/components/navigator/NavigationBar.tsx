import { Link, NavLink } from 'react-router-dom';
import logoSrc from '../../assets/images/logo.png';
import styled from 'styled-components';
import Button from 'components/common/Button';
import theme from 'assets/style/theme';

const NavBar = styled.nav`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
`;

const Logo = styled.div`
    width: 50px;
    height: 50px;
    background: url(${logoSrc}) no-repeat;
    background-size: 100%;
    background-position: center;
`;

const LeftItem = styled.div`
    display: flex;
    align-items: center;
    a {
        margin-right: 60px;
    }
    ul {
        display: flex;
        height: 100%;
        li {
            position: relative;
            display: flex;
            align-items: center;
            font-size: 20px;
            font-weight: bold;
            color: ${theme.colors.gray};
            &:hover {
                opacity: 0.8;
            }
            &:hover::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 12px;
                width: 30px;
                height: 5px;
                margin-top: 4px;
                background-color: ${theme.colors.yellow};
            }
            a.active {
                color: ${theme.colors.red};
            }
        }
    }
`;

function NavigationBar() {
    return (
        <NavBar>
            <LeftItem>
                <Link to="/">
                    <Logo />
                </Link>
                <ul>
                    <li>
                        <NavLink
                            to="menu"
                            className={({ isActive }) =>
                                isActive ? 'active' : ''
                            }
                        >
                            MENU
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="store"
                            className={({ isActive }) =>
                                isActive ? 'active' : ''
                            }
                        >
                            STORE
                        </NavLink>
                    </li>
                </ul>
            </LeftItem>
            <Link to="order">
                <Button color="red" size="big">
                    ORDER
                </Button>
            </Link>
        </NavBar>
    );
}

export default NavigationBar;
