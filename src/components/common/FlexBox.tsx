import styled, { css } from 'styled-components';

type FlexDirection = 'row' | 'column';
type FlexJustifyContent =
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around';
type FlexAlignItems =
    | 'stretch'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'baseline';

type FlexBoxProps = {
    direction?: FlexDirection;
    justifyContent?: FlexJustifyContent;
    alignItems?: FlexAlignItems;
};

const FlexBox = styled.div<FlexBoxProps>`
    display: flex;
    ${(props) => {
        return css`
            flex-direction: ${props.direction};
            justify-content: ${props.justifyContent};
            align-items: ${props.alignItems};
        `;
    }}
`;

FlexBox.defaultProps = {
    direction: 'row',
    justifyContent: 'center',
    alignItems: 'center',
};

export default FlexBox;
