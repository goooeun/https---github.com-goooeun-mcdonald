import theme from 'assets/style/theme';
import { KeyboardEventHandler, useRef } from 'react';
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
    label?: string;
    changeKeyword: (keyword: string) => void;
};

function SearchBar({ label, changeKeyword }: SearchBarProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    const clickSearchButton = () => {
        const inputText = inputRef.current ? inputRef.current.value : '';
        if (inputText.length !== 0 && inputText.length < 2) {
            alert('두글자 이상 입력해주세요.');
            return;
        }
        changeKeyword(inputText);
    };

    const handleKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            clickSearchButton();
        }
    };

    return (
        <Bar>
            {label && <TitleLabel>{label}</TitleLabel>}
            <InputBox>
                <input type="text" ref={inputRef} onKeyDown={handleKeydown} />
                <Button onClick={clickSearchButton}>검색</Button>
            </InputBox>
        </Bar>
    );
}

export default SearchBar;
