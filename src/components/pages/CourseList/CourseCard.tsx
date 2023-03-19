import { Link } from 'react-router-dom';
import { ICourse } from '../../../types/courses';
import { memo } from 'react';

const CourseCard = ({ course }: { course: ICourse }) => {
    const {
        id,
        title,
        description,
        previewImageLink,
        meta: { skills }
    } = course;
    return (
        <Link
            to={`/course/${id}`}
            className='h-full max-w-sm rounded overflow-hidden shadow-lg cursor-pointer hover:scale-95 transition-all md:even:justify-self-start md:odd:justify-self-end'
        >
            <img className='w-full' src={`${previewImageLink}/cover.webp`} alt={title} />
            <div className='px-6 py-4'>
                <div className='font-bold text-xl mb-2'>{title}</div>
                <p className='text-gray-700 text-base'>{description}</p>
            </div>
            <div className='px-6 pt-4 pb-2'>
                {skills?.map((skill) => (
                    <span
                        key={`${id}-${skill}`}
                        className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
                    >
                        {skill.trim()}
                    </span>
                ))}
            </div>
        </Link>
    );
};

export const MemoizedCourseCard = memo(CourseCard);
