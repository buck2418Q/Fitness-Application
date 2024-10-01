import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Lazy loaded components
const Home = React.lazy(() => import('../client/Home'));
const Trainers = React.lazy(() => import('../client/Trainers'));
const Review = React.lazy(() => import('../client/Review'));
const Plans = React.lazy(() => import('../client/Plans'));
const About = React.lazy(() => import('../client/About'));
const Loader = React.lazy(() => import('../components/Button')); // Check if Loader works fine
const Login = React.lazy(() => import('../authentication/Login'));
const Signup = React.lazy(() => import('../authentication/Signup'));
const HomePage = React.lazy(() => import('../client/HomePage'));

function AppRoutes() {
    const routesList = [
        {
            path: "/", element: <HomePage />, children: [
                { path: "home", element: <Home /> },
                { path: "about", element: <About /> },
                { path: "trainers", element: <Trainers /> },
                { path: "review", element: <Review /> },
                { path: "plans", element: <Plans /> },
                { path: "login", element: <Login /> },
                { path: "signup", element: <Signup /> },
            ]
        },
    ];

    return (
        <Suspense fallback={<div><Loader /></div>}>
            <BrowserRouter>
                <Routes>
                    {routesList.map(({ path, element, children }) => (
                        <Route key={path} path={path} element={element}>
                            {children?.map(({ path, element }) => (
                                <Route key={path} path={path} element={element} />
                            ))}
                        </Route>
                    ))}
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
}

export default AppRoutes;
