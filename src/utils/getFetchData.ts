import { useEffect, useState } from 'react';
import axios from 'axios';
import IFetchData from 'types/FetchData';
import IPagination from 'types/Pagination';

const SERVER_URI = process.env.REACT_APP_SERVER_URI;

function getFetchData() {
    const fetchData = async (query: string) => {
        try {
            const response = await axios.get(SERVER_URI + query);
            return response?.data || null;
        } catch (error) {
            throw error;
        }
    };

    return { fetchData } as const;
}

export default getFetchData;
