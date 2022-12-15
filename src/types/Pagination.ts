interface IPagination {
    docs: any[];
    hasNextPage: boolean;
    hasPrevPage: boolean;
    limit: number;
    page: number;
    pagingCounter: number;
    prevPage: number | null;
    nextPage: number | null;
    totalDocs: number;
    totalPages: number;
}

export default IPagination;
