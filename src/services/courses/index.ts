import axios from 'axios';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ICourse, ICoursePreview } from '../../types/courses';
import config from '../../config';

const coursesTokenAxiosClient = axios.create({
    baseURL: config.VITE_COURSES_API_URL
});

export const fetchCoursesToken = async (): Promise<string> => {
    const response = await coursesTokenAxiosClient.get('/auth/anonymous?platform=subscriptions');

    return response.data.token;
};

export const coursesApi = createApi({
    reducerPath: 'courses',
    baseQuery: fetchBaseQuery({
        baseUrl: config.VITE_COURSES_API_URL,
        prepareHeaders: async (headers, { getState, endpoint }) => {
            const token = await fetchCoursesToken();
            headers.set('Authorization', `Bearer ${token}`);
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getCourseList: builder.query<Array<ICourse>, void>({
            query: () => `/core/preview-courses`,
            transformResponse: (response: { courses: Array<ICourse> }, meta, arg) => {
                return response.courses;
            }
        }),
        getCourse: builder.query<ICoursePreview, string | undefined>({
            query: (id) => {
                if (!id) {
                    throw new Error('No id provided');
                }
                return `/core/preview-courses/${id}`;
            },
            transformResponse: (response: ICoursePreview, meta, arg) => {
                return response;
            }
        })
    })
});

export const { useGetCourseListQuery, useGetCourseQuery } = coursesApi;
