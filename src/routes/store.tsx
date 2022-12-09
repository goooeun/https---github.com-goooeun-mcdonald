import SearchBar from 'components/common/SearchBar';
import StoreList from 'components/store/StoreList';
import database from '../firebase';
import { collection, getDocs, limit, query } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import IStore from 'types/Store';
import Pagination from 'components/common/Pagination';

function Store() {
    const [stores, setStores] = useState<IStore[]>([]);
    const [page, setPage] = useState(1);

    const storeCollection = query(collection(database, 'store'), limit(5));
    useEffect(() => {
        async function getStores() {
            const snapshot = await getDocs(storeCollection);
            const data: IStore[] = snapshot.docs.map(
                (doc) => doc.data() as IStore
            );
            setStores(data);
        }
        getStores();
    }, []);

    const changePage = (i: number) => {
        setPage(i);
    };
    return (
        <>
            <SearchBar />
            <StoreList stores={stores} />
            <Pagination
                total={stores.length}
                limit={3}
                count={5}
                page={page}
                changePage={changePage}
            />
        </>
    );
}

export default Store;
