import theme from 'assets/style/theme';
import styled from 'styled-components';
import Button from './Button';

const Bar = styled.div`
    width: 100%;
    padding: 20px 32px;
    border-radius: 8px;
    background-color: ${theme.colors.lightGray};
`;

const TitleLabel = styled.h5`
    margin-bottom: 10px;
`;

const InputBox = styled.div`
    width: 60%;
    display: flex;
    input {
        flex-grow: 1;
        height: 36px;
        border: 1px solid ${theme.colors.gray};
        border-radius: 8px;
        margin-right: 16px;
        padding: 0 16px;
    }
`;

type SearchBarProps = {
    text?: string;
};

function SearchBar({ text }: SearchBarProps) {
    return (
        <Bar>
            {text && <TitleLabel>{text}</TitleLabel>}
            <InputBox>
                <input type="text " />
                <Button>검색</Button>
            </InputBox>
        </Bar>
    );
}

export default SearchBar;
