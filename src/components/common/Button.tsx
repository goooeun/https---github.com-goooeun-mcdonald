import theme from 'assets/style/theme';
import styled, { css } from 'styled-components';

type ButtonColor = 'red' | 'yellow' | 'gray';
type ButtonSize = 'big' | 'small' | 'wide';

interface ButtonProps {
    color?: ButtonColor;
    size?: ButtonSize;
}

const Button = styled.button<ButtonProps>`
    border: none;
    outline: none;
    color: #fff;
    border-radius: 8px;
    font-weight: bold;
    ${(props) => {
        switch (props.color) {
            case 'red':
                return css`
                    background-color: ${theme.colors.red};
                `;
            case 'yellow':
                return css`
                    background-color: ${theme.colors.yellow};
                `;
            default:
                return css`
                    background-color: ${theme.colors.gray};
                `;
        }
    }}

    ${(props) => {
        switch (props.size) {
            case 'big':
                return css`
                    padding: 12px 18px;
                    font-size: 16px;
                    border-radius: 14px;
                `;
            case 'wide':
                return css`
                    width: 100%;
                    height: 45px;
                    font-size: 16px;
                `;
            default:
                return css`
                    padding: 0 16px;
                    font-size: 14px;
                `;
        }
    }}
    cursor: pointer;
`;

Button.defaultProps = {
    color: 'gray',
    size: 'small',
};

export default Button;
