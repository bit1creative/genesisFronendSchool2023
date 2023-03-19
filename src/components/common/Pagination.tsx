import { UsePaginationReturn, usePagination } from '../../hooks/usePagination';
import { ICourse } from '../../types/courses';

interface PaginationProps extends UsePaginationReturn<ICourse> {}

export const Pagination = ({
    isPaginating,
    currentPage,
    setCurrentPage,
    totalPages
}: PaginationProps) => {
    const canGoPrev = currentPage > 1;
    const canGoNext = currentPage < totalPages;

    return isPaginating ? (
        <div className='flex justify-around'>
            <button disabled={!canGoPrev} onClick={() => setCurrentPage(currentPage - 1)}>
                Prev
            </button>
            <div>
                {currentPage}
                <span className='text-slate-600'> / {totalPages}</span>
            </div>
            <button disabled={!canGoNext} onClick={() => setCurrentPage(currentPage + 1)}>
                Next
            </button>
        </div>
    ) : null;
};
