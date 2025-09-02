import { createBrowserRouter, Navigate } from 'react-router';
import { App } from '@common/components/App/App';
import { AboutPage } from '@features/about/components/AboutPage/AboutPage';
import { TodayPage } from '@features/today/components/TodayPage/TodayPage';
import { ErrorFallback } from '@common/components/ErrorFallback/ErrorFallback';

export const router = createBrowserRouter(
    [
        {
            path: '/',
            Component: App,
            children: [
                { index: true, element: <Navigate to='/stories' /> },
                { path: '/today', Component: TodayPage },
                { path: '/about', Component: AboutPage },
                { path: '/*', element: <Navigate to='/today' /> }
            ],
            errorElement: <ErrorFallback/>
        }
    ],
    { basename: import.meta.env.BASE_URL }
);
