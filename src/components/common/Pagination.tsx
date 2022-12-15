import styled from 'styled-components';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import theme from 'assets/style/theme';

const PageList = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

const PageButton = styled.button`
    width: 30px;
    height: 30px;
    border: 1px solid #ddd;
    background-color: #fff;
    border-radius: 4px;
    margin: 4px;
    &.prev,
    &.next {
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &.active {
        border: 1px solid ${theme.colors.yellow};
        color: #fff;
        background-color: ${theme.colors.yellow};
    }
    &:hover:not(.active) {
        background-color: ${theme.colors.lightGray};
    }
    &:disabled {
        background-color: ${theme.colors.lightGray};
        color: ${theme.colors.gray};
        &:hover {
            opacity: 1;
            cursor: default;
        }
    }
`;

type PaginationProps = {
    total: number;
    limit: number;
    offset: number;
    page: number;
    changePage: (i: number) => void;
};

/**
 * Pagination
 *
 * @props total: 총 아이템 수
 * @props limit: 한 페이지에 보여지는 아이템 수
 * @props offset: 한 화면에 보여지는 페이지 수 (min = 3)
 * @props page: 현재 페이지
 * @props changePage: 페이지 state 변경 함수
 *
 */
const Pagination: React.FC<PaginationProps> = ({
    total,
    limit,
    offset,
    page,
    changePage,
}) => {
    const totalPage = Math.ceil(total / limit);
    const pageGroup = Math.ceil(page / offset);

    let lastPage = pageGroup * offset;
    if (lastPage > totalPage) lastPage = totalPage;
    const firstPage = offset * (pageGroup - 1) + 1;

    let pageList = [];
    for (let i = firstPage; i <= lastPage; i++) {
        const isActive = page === i ? 'active' : '';
        pageList.push(
            <PageButton
                key={i}
                className={isActive}
                onClick={() => changePage(i)}
            >
                {i}
            </PageButton>
        );
    }

    return (
        <PageList>
            <PageButton
                className="prev"
                onClick={() => changePage(page - 1)}
                disabled={firstPage === 1 ? true : false}
            >
                <MdChevronLeft />
            </PageButton>
            {pageList}
            <PageButton
                className="next"
                onClick={() => changePage(page + 1)}
                disabled={lastPage === totalPage ? true : false}
            >
                <MdChevronRight />
            </PageButton>
        </PageList>
    );
};

export default Pagination;
