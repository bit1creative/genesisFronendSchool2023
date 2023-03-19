import { useParams } from 'react-router-dom';

export { Loader } from './loader';

const CourseViewPage = () => {
    let { courseId } = useParams();

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <h1 className='text-3xl font-bold text-blue-600'>CourseViewPage {courseId}</h1>
        </div>
    );
};

export default CourseViewPage;
