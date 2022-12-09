import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import database from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import IMenu from 'types/Menu';
import styled from 'styled-components';
import theme from 'assets/style/theme';
import Table from 'components/common/Table';
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

function MenuDetail() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [menu, setMenu] = useState<IMenu>();
    useEffect(() => {
        if (!id) {
            throw new Response('', {
                status: 404,
                statusText: 'Not Fount Page.',
            });
        }

        async function getMenuDetail() {
            const docRef = doc(database, 'menu', id as string);
            const snapshot = await getDoc(docRef);

            if (snapshot.exists()) {
                setMenu(snapshot.data() as IMenu);
            } else {
                console.log('error - No match data');
            }
        }
        getMenuDetail();
    }, []);

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
                            src={`${process.env.PUBLIC_URL}/assets/${menu?.type}/${menu?.img}`}
                        />
                    </ImgWrapper>
                    <h2>{menu?.name}</h2>
                    <h4>{menu?.nameEn}</h4>
                    <PointLine />
                    <p>{menu?.description}</p>
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
