import { useParams } from 'react-router-dom';
import { useGetCourseQuery } from '../../services/courses';
import { useEffect } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { ICoursePreview } from '../../types/courses';
import { RatingStars } from '../../components/pages/CoursePreview/RatingStars';
import { Loader } from './loader';

export { Loader } from './loader';

const ratingStars = Array.from({ length: 5 }, (_, index) => (
    <StarIcon key={index} className='h-5 w-5 text-yellow-400' aria-hidden='true' />
));

interface CourseViewParams {
    course: ICoursePreview;
}

const CourseViewPage = () => {
    const { courseId } = useParams();
    const { data, isLoading, error } = useGetCourseQuery(courseId);

    if (error) {
        throw error;
    }

    if (isLoading) {
        return <Loader />;
    }

    if (data) {
        const {
            id,
            title,
            tags,
            launchDate,
            status,
            description,
            duration,
            previewImageLink,
            rating,
            meta: {
                slug = '',
                skills = [],
                courseVideoPreview = {
                    link: '',
                    previewImageLink: '',
                    duration: 0
                }
            } = {},
            //   lessons,
            containsLockedLessons
        } = data;

        return (
            <div className='max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
                <div className='py-10'>
                    <img
                        className='rounded-lg h-64 w-full object-cover object-center mb-6'
                        src={`${previewImageLink}/cover.webp`}
                        alt={`Preview of ${title}`}
                    />
                    <div className='sm:flex sm:justify-between sm:items-center mb-10'>
                        <div className='mb-4 sm:mb-0'>
                            <h1 className='text-4xl font-extrabold text-gray-900'>{title}</h1>
                            <p className='mt-1 text-xl text-gray-500'>{description}</p>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <RatingStars rating={rating} />
                            <span className='text-gray-600'>{rating}</span>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                        <div className='border-t border-gray-200 pt-8'>
                            <h2 className='text-lg font-medium text-gray-900'>Course Details</h2>
                            <dl className='mt-5 space-y-5'>
                                <div className='sm:flex sm:justify-between'>
                                    <dt className='text-gray-600'>Status</dt>
                                    <dd className='mt-1 text-gray-900 sm:mt-0 sm:ml-6'>{status}</dd>
                                </div>
                                <div className='sm:flex sm:justify-between'>
                                    <dt className='text-gray-600'>Launch Date</dt>
                                    <dd className='mt-1 text-gray-900 sm:mt-0 sm:ml-6'>
                                        {launchDate}
                                    </dd>
                                </div>
                                <div className='sm:flex sm:justify-between'>
                                    <dt className='text-gray-600'>Duration</dt>
                                    <dd className='mt-1 text-gray-900 sm:mt-0 sm:ml-6'>
                                        {duration} minutes
                                    </dd>
                                </div>
                                <div className='sm:flex sm:justify-between'>
                                    <dt className='text-gray-600'>Tags</dt>
                                    <dd className='mt-1 text-gray-900 sm:mt-0 sm:ml-6'>
                                        {tags?.map((tag) => (
                                            <span
                                                key={tag}
                                                className='inline-flex items-center px-2 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800 mr-2'
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </dd>
                                </div>
                                <div className='sm:flex sm:justify-between'>
                                    <dt className='text-gray-600'>Skills</dt>
                                    <dd className='mt-1 text-gray-900 sm:mt-0 sm:ml-6'>
                                        {skills?.map((skill) => (
                                            <span
                                                key={skill}
                                                className='inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 mr-2'
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </dd>
                                </div>
                            </dl>
                        </div>
                        <div className='border-t border-gray-200 pt-8'>
                            <h2 className='text-lg font-medium text-gray-900'>
                                Course Video Preview
                            </h2>
                            <div className='mt-5'>
                                <div className='mt-4 flex items-center space-x-4'>
                                    <div className='flex-shrink-0'>
                                        <img
                                            className='h-12 w-12 rounded-full'
                                            src={`${courseVideoPreview.previewImageLink}/cover.webp`}
                                            alt=''
                                        />
                                    </div>
                                    <div className='flex-1 min-w-0'>
                                        <p className='text-sm font-medium text-gray-900 truncate'>
                                            {title}
                                        </p>
                                        <p className='text-sm text-gray-500 truncate'>
                                            {courseVideoPreview.duration} minutes
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <h2 className='text-lg font-medium text-gray-900'>
                            {containsLockedLessons ? 'Unlocked' : ''} Course Lessons
                        </h2>
                        {/* <dl className='mt-5 space-y-5'>
                        {lessons.map(({ id: lessonId, title: lessonTitle }) => (
                            <div
                                key={lessonId}
                                className={`${
                                    containsLockedLessons && lessonTitle.includes('Locked')
                                        ? 'opacity-50'
                                        : ''
                                } sm:flex sm:justify-between`}
                            >
                                <dt className='text-gray-600'>{lessonTitle}</dt>
                                <dd className='mt-1 text-gray-900 sm:mt-0 sm:ml-6'>
                                    <a
                                        href={`/${slug}/${lessonId}`}
                                        className={`${
                                            containsLockedLessons && lessonTitle.includes('Locked')
                                                ? 'text-gray-400'
                                                : 'text-blue-600 hover:text-blue-800'
                                        }`}
                                    >
                                        View Lesson
                                    </a>
                                </dd>
                            </div>
                        ))}
                    </dl> */}
                    </div>
                </div>
            </div>
        );
    }
};

export default CourseViewPage;
