import theme from 'assets/style/theme';
import Table from 'components/common/Table';
import IStore from 'types/Store';
import styled from 'styled-components';
import {
    MdDriveEta,
    MdWbSunny,
    MdLocalParking,
    MdDeliveryDining,
} from 'react-icons/md';

const Wrapper = styled.div`
    padding: 20px;
`;

const Name = styled.p`
    font-size: 16px;
    font-weight: bold;
    color: ${theme.colors.black};
    margin-bottom: 8px;
`;

const Option = styled.p`
    width: 100px;
    text-align: left;
    font-size: 14px;
    color: ${theme.colors.black};
    margin: 0 auto 2px;
    &:last-child {
        margin-bottom: 0;
    }
    svg {
        font-size: 18px;
        vertical-align: sub;
    }
`;

type StoreListType = {
    stores: IStore[];
    keyword: string;
};

const StoreList: React.FC<StoreListType> = ({ stores, keyword }) => {
    return (
        <Wrapper>
            <Table thAlign="center" tdAlign="center">
                <caption>
                    * 영업시간은 매장 사정에 따라 변경 될 수 있습니다
                </caption>
                <thead>
                    <tr>
                        <th>매장명 / 주소</th>
                        <th>전화번호</th>
                        <th>영업시간</th>
                        <th>이용가능 서비스</th>
                    </tr>
                </thead>
                <tbody>
                    {stores &&
                        stores.map((store) => {
                            if (
                                keyword !== '' &&
                                store.name.indexOf(keyword) < 0
                            ) {
                                return;
                            }
                            return (
                                <tr key={store.name}>
                                    <td className="left">
                                        <Name>{store.name}</Name>
                                        <p>{store.address}</p>
                                        {store.address2 && (
                                            <p>{store.address2}</p>
                                        )}
                                    </td>
                                    <td>
                                        <p>{store.phoneNumber}</p>
                                    </td>
                                    <td>
                                        <p>{store.openHours}</p>
                                    </td>
                                    <td>
                                        {store.macDrive && (
                                            <Option>
                                                <MdDriveEta /> 맥드라이브
                                            </Option>
                                        )}
                                        {store.macMorning && (
                                            <Option>
                                                <MdWbSunny /> 맥모닝
                                            </Option>
                                        )}
                                        {store.parking && (
                                            <Option>
                                                <MdLocalParking /> 주차
                                            </Option>
                                        )}
                                        {store.delivery && (
                                            <Option>
                                                <MdDeliveryDining /> 맥딜리버리
                                            </Option>
                                        )}
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </Table>
        </Wrapper>
    );
};

export default StoreList;
