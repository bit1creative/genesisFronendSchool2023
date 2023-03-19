import { Link, Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='min-h-screen p-8'>
            <Link to='/' className='text-center text-3xl font-bold text-blue-600'>
                Home
            </Link>
            <div className='my-4'>
                <Outlet />
            </div>
        </div>
    );
};

export { ErrorPage } from './error';
export default Root;
