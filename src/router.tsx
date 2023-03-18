import { createBrowserRouter } from 'react-router-dom';
import CourseListPage from './pages/CourseListPage';
import CourseViewPage from './pages/CourseViewPage';
import ErrorPage from './pages/ErrorPage';

export default createBrowserRouter([
    {
        path: '/',
        element: <CourseListPage />,
        errorElement: <ErrorPage />
    },
    {
        path: '/course/:courseId',
        element: <CourseViewPage />
    }
]);
