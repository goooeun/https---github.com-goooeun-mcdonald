import theme from 'assets/style/theme';
import styled from 'styled-components';

type RadioType = {
    label: string;
    name: string;
    id: string;
    value: string | number;
    onChange: () => void;
    isChecked: boolean;
};

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    &:not(:last-child) {
        margin-right: 16px;
    }
`;

const Label = styled.label`
    font-size: 14px;
    font-weight: 700;
    margin-right: 8px;
`;

const InputRadio = styled.input`
    position: relative;
    -webkit-appearance: none;
    appearance: none;
    &::before {
        content: '';
        display: inline-block;
        width: 16px;
        height: 16px;
        border: 2px solid ${theme.colors.green};
        border-radius: 50%;
        vertical-align: middle;
    }
    &:checked::after {
        content: '';
        width: 12px;
        height: 12px;
        background-color: ${theme.colors.green};
        border-radius: 50%;
        position: absolute;
        top: 4px;
        left: 4px;
    }
`;

const RadioButton: React.FC<RadioType> = ({
    label,
    name,
    id,
    value,
    onChange,
    isChecked,
}) => {
    return (
        <Wrapper>
            <Label htmlFor={id}>{label}</Label>
            <InputRadio
                type="radio"
                name={name}
                id={id}
                value={value}
                onChange={onChange}
                defaultChecked={isChecked}
            />
        </Wrapper>
    );
};

export default RadioButton;
