import styled from 'styled-components';
import mainImg from 'assets/images/new_main.png';

const ImageWrapper = styled.div`
    width: 100%;
    height: 100%;
`;

const FullImage = styled.div`
    width: 100%;
    height: 100%;
    background: url(${mainImg}) no-repeat;
    background-size: cover;
    background-position: center;
`;

function Main() {
    return (
        <ImageWrapper>
            <FullImage />
        </ImageWrapper>
    );
}

export default Main;
