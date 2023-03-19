import { CourseList } from '../../components/pages/CourseList';
import { Pagination } from '../../components/common/Pagination';
import { Loader } from './loader';
import { usePagination } from '../../hooks/usePagination';
import { useGetCourseListQuery } from '../../services/courses';
import { ICourse } from '../../types/courses';

const CourseListPage = () => {
    const { data: courseList = [], isLoading, error } = useGetCourseListQuery();
    const { setItemList, isPaginating, currentPage, setCurrentPage, pageItems, totalPages } =
        usePagination<ICourse>(courseList, 10);

    if (error) {
        throw error;
    }

    return (
        <div className='mx-auto min-h-screen grid place-items-center gap-8 md:grid-cols-2'>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <CourseList courseList={pageItems} />
                    <div className='md:col-span-2 w-1/4 '>
                        <Pagination
                            setItemList={setItemList}
                            isPaginating={isPaginating}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            pageItems={pageItems}
                            totalPages={totalPages}
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default CourseListPage;
