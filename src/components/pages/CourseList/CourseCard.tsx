import { memo, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ICourse } from '../../../types/courses';
import { CourseCardPlayer } from './CourseCardPlayer';
import { CourseCardInfo } from './CourseCardInfo';

const CourseCard = ({ course }: { course: ICourse }) => {
    const {
        id,
        title,
        description,
        previewImageLink,
        meta: { skills, courseVideoPreview: { link: videoLink } = {} }
    } = course;

    const videoRef = useRef<HTMLVideoElement>(null);

    return (
        <Link
            to={`/course/${id}`}
            className='h-full max-w-sm rounded overflow-hidden shadow-lg cursor-pointer hover:scale-95 transition-all md:even:justify-self-start md:odd:justify-self-end'
        >
            <CourseCardPlayer
                ref={videoRef}
                previewImageSrc={previewImageLink}
                videoSrc={videoLink}
            />
            <CourseCardInfo id={id} title={title} description={description} skills={skills} />
        </Link>
    );
};

export const MemoizedCourseCard = memo(CourseCard);
