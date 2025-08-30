import { createBrowserRouter, Navigate } from 'react-router';
import { App } from '@common/components/App/App';
import { AboutPage } from '@features/about/components/AboutPage/AboutPage';
import { StoriesPage } from '@features/stories/components/StoriesPage/StoriesPage';
import { ErrorFallback } from '@common/components/ErrorFallback/ErrorFallback';

export const router = createBrowserRouter(
    [
        {
            path: '/',
            Component: App,
            children: [
                { index: true, element: <Navigate to='/stories' /> },
                { path: '/stories', Component: StoriesPage },
                { path: '/about', Component: AboutPage },
                { path: '/*', element: <Navigate to='/stories' /> }
            ],
            errorElement: <ErrorFallback/>
        }
    ],
    { basename: import.meta.env.BASE_URL }
);
