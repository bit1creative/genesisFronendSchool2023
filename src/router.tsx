import { createBrowserRouter } from 'react-router-dom';
import Root, { ErrorPage as RootErrorPage } from './pages/Root';
import CourseListPage, { ErrorPage as CourseListErrorPage } from './pages/CourseList';
import CourseViewPage, { Loader as CourseViewLoader } from './pages/CourseView';

export default createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <RootErrorPage />,
        children: [
            {
                path: '/',
                element: <CourseListPage />,
                errorElement: <CourseListErrorPage />
            },
            {
                path: '/course/:courseId',
                loader: CourseViewLoader,
                element: <CourseViewPage />
            }
        ]
    }
]);
