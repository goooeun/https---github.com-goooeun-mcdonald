import SearchBar from 'components/common/SearchBar';
import StoreList from 'components/store/StoreList';
import database from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import IStore from 'types/Store';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 20px;
`;

function Store() {
    const [stores, setStores] = useState<IStore[]>([]);
    useEffect(() => {
        async function getStores() {
            const menuCollection = collection(database, 'store');
            const snapshot = await getDocs(menuCollection);
            const data: IStore[] = snapshot.docs.map(
                (doc) => doc.data() as IStore
            );
            setStores(data);
        }
        getStores();
    }, []);
    return (
        <>
            <SearchBar />
            <Wrapper>
                <StoreList stores={stores} />
            </Wrapper>
        </>
    );
}

export default Store;
