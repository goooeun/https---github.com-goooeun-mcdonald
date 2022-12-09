import theme from 'assets/style/theme';

import styled, { css } from 'styled-components';

type AlignType = 'left' | 'center' | 'right';

type TableProps = {
    thAlign: AlignType;
    tdAlign: AlignType;
};

const Table = styled.table<TableProps>`
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    border-top: 2px solid ${theme.colors.gray};
    border-bottom: 2px solid ${theme.colors.gray};
    font-size: 14px;
    caption {
        text-align: left;
        color: ${theme.colors.red};
        margin-bottom: 8px;
    }
    tr {
        height: 60px;
        th {
            text-align: ${(props) => props.thAlign};
            padding-left: 16px;
        }
        td {
            text-align: ${(props) => props.tdAlign};
            ${(props) => {
                if (props.tdAlign === 'left') {
                    return css`
                        padding: 0 16px;
                    `;
                }
            }}
            &.left {
                text-align: left;
                padding: 16px;
            }
            &.center {
                text-align: center;
            }
        }
        &:first-child {
            border-bottom: 1px solid ${theme.colors.gray};
        }
    }
`;

export default Table;
