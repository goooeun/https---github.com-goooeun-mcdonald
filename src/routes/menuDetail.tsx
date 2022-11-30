import theme from 'assets/style/theme';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IoArrowBackOutline } from 'react-icons/io5';

const Container = styled.div`
    display: flex;
`;
const BackButton = styled.button`
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    background-color: ${theme.colors.red};
    margin-right: 32px;
    svg {
        font-size: 30px;
        color: #fff;
    }
    cursor: pointer;
`;

const ImgWrapper = styled.div`
    width: 200px;
    height: 200px;
    background-color: ${theme.colors.lightGray};
    border-radius: 50%;
    display: flex;
    align-items: center;
    margin-bottom: 32px;
    img {
        width: 100%;
    }
`;

const PointLine = styled.div`
    width: 45px;
    height: 3px;
    background-color: ${theme.colors.yellow};
    margin: 20px 0;
`;

const Item = styled.div`
    margin-bottom: 32px;
    &:last-child {
        margin-bottom: 0;
    }
    h3 {
        margin-bottom: 16px;
    }
`;

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

function MenuDetail() {
    const navigate = useNavigate();
    return (
        <Container>
            <section>
                <BackButton onClick={() => navigate(-1)}>
                    <IoArrowBackOutline />
                </BackButton>
            </section>
            <section style={{ width: '256px', marginRight: '32px' }}>
                <div>
                    <ImgWrapper>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/burger/001.png`}
                        />
                    </ImgWrapper>
                    <h2>베이컨토마토디럭스</h2>
                    <h4>Bacon Tomato Deluxe</h4>
                    <PointLine />
                    <p>
                        두 장의 100% 순 쇠고기 패티에 그릴에 구워 더욱 고소한
                        1장의 베이컨을 얹고, 신선한 토마토와 양상추, 매콤달콤한
                        스위트 칠리 소스, 치즈, 마요네즈를 더해 더욱 풍부하고
                        신선한 맛의 프리미엄 버거
                    </p>
                </div>
            </section>
            <section style={{ flexGrow: 1 }}>
                <Item>
                    <h3>영양정보</h3>
                    <Table>
                        <thead>
                            <tr>
                                <th>영양소</th>
                                <td>중량(g)</td>
                                <td>중량(ml)</td>
                                <td>당</td>
                                <td>단백질</td>
                                <td>포화지방</td>
                                <td>나트륨</td>
                                <td>카페인</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>함량</th>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <th>영양소기준</th>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                        </tbody>
                    </Table>
                </Item>
                <Item>
                    <h3>알레르기 정보</h3>
                    <p>
                        알레르기 유발 가능 식재료 (난류, 우유, 대두, 밀,
                        돼지고기, 토마토, 쇠고기)
                    </p>
                    <p>
                        * 일부 튀김류 제품은 새우 패티와 같은 조리기구를
                        사용하고 있습니다.
                    </p>
                </Item>
                <Item>
                    <h3>원산지정보</h3>
                    <p>쇠고기: 호주산</p>
                    <p>돼지고기(베이컨):외국산(아일랜드,스페인,캐나다)</p>
                </Item>
            </section>
        </Container>
    );
}

export default MenuDetail;
