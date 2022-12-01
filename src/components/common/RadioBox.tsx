import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
`;

const RadioBox: React.FC<PropsWithChildren> = ({ children }) => {
    return <Wrapper>{children}</Wrapper>;
};

export default RadioBox;
