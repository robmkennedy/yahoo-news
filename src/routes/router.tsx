import { createBrowserRouter, Navigate } from 'react-router';
import { App } from '@common/components/App/App';
import { AboutPage } from '@features/about/components/AboutPage/AboutPage';
import { TodayPage } from '@features/today/components/TodayPage/TodayPage';
import { ErrorFallback } from '@common/components/ErrorFallback/ErrorFallback';

/**
 * Creates the react-router config and assigns corresponding components to each route.
 * When switching to a route - the Outlet in the MainPanel will be assigned to the page component.
 * If any unknown paths are entered, the app will default to the /today route.
 * The base App component will be wrapped with the React error boundary of ErrorFallback.
 */
export const router = createBrowserRouter(
    [
        {
            path: '/',
            Component: App,
            children: [
                { index: true, element: <Navigate to='/today' /> },
                { path: '/today', Component: TodayPage },
                { path: '/about', Component: AboutPage },
                { path: '/*', element: <Navigate to='/today' /> }
            ],
            errorElement: <ErrorFallback />
        }
    ],
    { basename: import.meta.env.BASE_URL }
);
