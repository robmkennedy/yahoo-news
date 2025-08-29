import { createBrowserRouter, Navigate } from 'react-router';
import { App } from '@common/components/App/App';
import { StoriesPage } from '@features/stories/components/StoriesPage/StoriesPage';

export const router = createBrowserRouter(
    [
        {
            path: '/',
            Component: App,
            children: [
                { index: true, element: <Navigate to='/stories' /> },
                { path: '/stories', Component: StoriesPage },
                { path: '/*', element: <Navigate to='/stories' /> }
            ]
        }
    ],
    { basename: import.meta.env.BASE_URL }
);
