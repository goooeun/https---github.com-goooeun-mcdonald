import theme from 'assets/style/theme';
import styled from 'styled-components';

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    border-top: 2px solid ${theme.colors.gray};
    border-bottom: 2px solid ${theme.colors.gray};
    font-size: 14px;
    tr {
        height: 60px;
        th {
            text-align: left;
            padding-left: 16px;
            border-right: 1px solid ${theme.colors.gray};
        }
        td {
            text-align: center;
        }
        &:first-child {
            border-bottom: 1px solid ${theme.colors.gray};
        }
    }
`;

export default Table;
