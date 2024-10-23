import React, { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

// Lazy loaded components
const Home = React.lazy(() => import('./client/Home'));
const Trainers = React.lazy(() => import('./client/Trainers'));
const Review = React.lazy(() => import('./client/Review'));
const Plans = React.lazy(() => import('./client/Plans'));
const About = React.lazy(() => import('./client/About'));
const Loader = React.lazy(() => import('./components/Loader')); // Check if Loader works fine
const Login = React.lazy(() => import('./authentication/Login'));
const Signup = React.lazy(() => import('./authentication/Signup'));
const HomePage = React.lazy(() => import('./client/HomePage'));
const Layout = React.lazy(() => import('./user/navigation/Layout'));
const Dashboard = React.lazy(() => import('./user/pages/Dashboard'))
const UserPlans = React.lazy(() => import('./user/pages/Plans'));
const AdminDashboard = React.lazy(() => import('./admin/pages/Dashboard'));
const AdminPlans = React.lazy(() => import('./admin/pages/Plans'));
const AdminLayout = React.lazy(() => import('./admin/navigation/Layout'));
const AdminUsers = React.lazy(() => import('./admin/pages/Users'))
const AdminTrainers = React.lazy(() => import('./admin/pages/Trainers'))
const PageNotFound = React.lazy(() => import('./components/PageNotFound'))

function AppRoutes() {
    const routesList = [
        {
            path: "*", element: <PageNotFound />
        },
        {
            path: "/", element: <HomePage />, children: [
                { path: "", element: <Navigate to="home" /> },
                { path: "home", element: <Home /> },
                { path: "about", element: <About /> },
                { path: "trainers", element: <Trainers /> },
                { path: "review", element: <Review /> },
                { path: "plans", element: <Plans /> },
                // { path: "signup", element: <Signup /> },
            ]
        },


        // user routes 
        {
            path: "groot", element: <Layout />, children: [
                { path: "", element: <Navigate to="dashboard" /> },
                { path: "dashboard", element: <Dashboard /> },
                { path: "plans", element: <UserPlans /> }
            ]
        },

        // admin routes
        {
            path: "admin", element: <AdminLayout />, children: [
                { path: "", element: <Navigate to="dashboard" /> },
                { path: "dashboard", element: <AdminDashboard /> },
                { path: "Plans", element: <AdminPlans /> },
                { path: "user", element: <AdminUsers /> },
                { path: "trainer", element: <AdminTrainers /> }
            ]
        },
        { path: "login", element: <Login /> },
        { path: "signup", element: <Signup /> },


        {
            path: 'loader', element: <Loader />
        }
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
