import { MemoizedCourseCard } from './CourseCard';
import { ICourse } from '../../../types/courses';

type CourseListProps = {
    courseList: ICourse[];
};

export const CourseList = ({ courseList }: CourseListProps) => {
    return (
        <>
            {courseList?.map((course) => (
                <MemoizedCourseCard key={course.id} course={course} />
            ))}
        </>
    );
};
