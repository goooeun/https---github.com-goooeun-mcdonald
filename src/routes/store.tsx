import SearchBar from 'components/common/SearchBar';
import StoreList from 'components/store/StoreList';
import database from '../firebase';
import {
    collection,
    getCountFromServer,
    getDocs,
    limit,
    query,
    QuerySnapshot,
    startAfter,
} from 'firebase/firestore';
import { useState, useEffect } from 'react';
import IStore from 'types/Store';
import Pagination from 'components/common/Pagination';

function Store() {
    const [stores, setStores] = useState<IStore[]>([]);
    const [storeCount, setStoreCount] = useState(0);
    const [lastVisible, setLastVisible] = useState<any>(undefined);
    const [page, setPage] = useState(1);
    const [storeKeyword, setStoreKeyword] = useState('');

    const storeCollection = collection(database, 'store');

    useEffect(() => {
        async function getInitialStore() {
            const snapshot = await getCountFromServer(storeCollection);
            setStoreCount(snapshot.data().count);
            getStores();
        }
        getInitialStore();
    }, []);

    async function getStores() {
        const _query =
            lastVisible === undefined
                ? query(storeCollection, limit(3))
                : query(storeCollection, startAfter(lastVisible), limit(3));

        const storeSnapshot = await getDocs(_query);
        setLastVisible(storeSnapshot.docs[storeSnapshot.docs.length - 1]);
        const data: IStore[] = storeSnapshot.docs.map(
            (doc) => doc.data() as IStore
        );
        setStores(data);
    }

    const changeKeyword = (keyword: string) => {
        setStoreKeyword(keyword);
    };

    const changePage = (i: number) => {
        setPage(i);
        getStores();
    };

    return (
        <>
            <SearchBar label="지점명" changeKeyword={changeKeyword} />
            <StoreList stores={stores} keyword={storeKeyword} />
            <Pagination
                total={storeCount}
                limit={3}
                count={5}
                page={page}
                changePage={changePage}
            />
        </>
    );
}

export default Store;
