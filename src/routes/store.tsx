import { useState, useEffect } from 'react';
import SearchBar from 'components/common/SearchBar';
import StoreList from 'components/store/StoreList';
import IStore from 'types/Store';
import Pagination from 'components/common/Pagination';
import getFetchData from 'utils/getFetchData';
import IPagination from 'types/Pagination';
import qs from 'query-string';

function Store() {
    const [stores, setStores] = useState<IStore[]>([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [storeKeyword, setStoreKeyword] = useState('');
    const { fetchData } = getFetchData();

    // pagination
    const limit: number = 3;
    const offset: number = 5;

    useEffect(() => {
        (async function (page, storeKeyword) {
            await getStores();
        })(page, storeKeyword);
    }, [page, storeKeyword]);

    async function getStores() {
        try {
            if (storeKeyword !== '') setPage(1);
            const queryString = qs.stringify({
                page,
                limit,
                keyword: storeKeyword,
            });
            const query = `/stores?${queryString}`;
            const data = await fetchData(query);
            setTotal(data?.totalDocs);
            setStores(data?.docs);
        } catch (error) {
            console.error(error);
        }
    }

    const changeKeyword = (keyword: string) => {
        setStoreKeyword(keyword);
    };

    const changePage = (i: number) => {
        setPage(i);
    };

    return (
        <>
            <SearchBar label="매장명" changeKeyword={changeKeyword} />
            <StoreList stores={stores} />
            <Pagination
                total={total}
                limit={limit}
                offset={offset}
                page={page}
                changePage={changePage}
            />
        </>
    );
}

export default Store;
