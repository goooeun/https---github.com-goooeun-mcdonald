import { createGlobalStyle } from 'styled-components';

import theme from '../style/theme';
import backgroundSrc from '../images/background.png';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html,
    body {
        width: 100%;
        height: 100%;
        font-family: Rubik, 'Noto Sans KR', sans-serif;
        color: ${theme.colors.black};
    }
    
    body {
        background-image: url(${backgroundSrc});
        background-repeat: no-repeat;
        background-position: center 0;
    }

    h2 {
        font-size: 28px;
        font-weight: bold;
        color: ${theme.colors.black};
    }

    h3 {
        font-size: 20px;
        font-weight: bold;
        color: ${theme.colors.black};
        &.gray {
            color: ${theme.colors.gray};
        }
    }

    h4 {
        font-size: 16px;
        font-weight: bold;
        color: ${theme.colors.gray};
    }

    h5 {
        font-size: 14px;
        font-weight: bold;
        color: ${theme.colors.gray};
    }

    p {
        color: ${theme.colors.gray};
        word-break: keep-all;
        font-size: 14px;
    }

    a {
        text-decoration: none;
        color: ${theme.colors.gray};
    }

    ul, li {
        list-style: none;
    }

    button:hover {
        opacity: 0.7;
    }
    
    #root {
        height: 100%;
        min-height: 798px;
        padding: 60px;
    }
    
    .container {
        display: flex;
        flex-direction: column;
        min-width: 980px;
        height: 100%;
        background-color: #fff;
        border-radius: 8px;
        padding: 40px;
        position: relative;
    }

    .content {
        margin-top: 32px;
        width: 100%;
        height: 100%;
        overflow: scroll;
    }
`;

export default GlobalStyle;
